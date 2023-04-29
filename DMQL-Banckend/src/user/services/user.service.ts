import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { plainToClass } from 'class-transformer';
import * as Papa from 'papaparse';

import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { UserAffiliation } from '../dtos/user-affilation.dto';
import { CreateUserInput } from '../dtos/user-create-input.dto';
import { UserOutput } from '../dtos/user-output.dto';
import { UpdateRoleDto, UpdateUserInput } from '../dtos/user-update-input.dto';
import { User } from '../entities/users.entity';
import { UserRepository } from '../repositories/user.repository';
import {patientRegister} from 'src/auth/dtos/auth-register-input.dto';
import { patient } from '../entities/patient.entity';
import { PatientRepository } from '../repositories/patient.repository';
import { Doctor } from '../entities/doctor.entity';
import { DoctorRepository } from '../repositories/doctor.repository';
import { AdminRepository } from '../repositories/admin.repository';
import { Admin } from '../entities/admin.entity';
import { AppoitmentRepository} from '../repositories/appointment.repository'
import { Appointment } from '../entities/appointment.entity';
import {BookingInput} from '../dtos/user-booking-input.dto'
import { DoctorDutyRepository } from '../repositories/doctor.schedule.repository';
import { use } from 'passport';



@Injectable()
export class UserService {
  constructor(
    private repository: UserRepository,
    private readonly logger: AppLogger,
    private readonly patientRepository: PatientRepository,
    private readonly doctorRepository: DoctorRepository,
    private readonly adminRepository: AdminRepository,
    private readonly appointmentRepository: AppoitmentRepository,
    private readonly DoctorDutyRepository:DoctorDutyRepository

  ) {
    this.logger.setContext(UserService.name);
  }
  async createUser(
    ctx: RequestContext,
    input: CreateUserInput,
  ): Promise<UserOutput> {
    this.logger.log(ctx, `${this.createUser.name} was called`);
    console.log(input);

    const user = plainToClass(User, input);

    user.password = await hash(input.password, 10);
    
    const savedUser = await this.repository.save(user);
    var a=savedUser.roles[0]

    if(a==='PATIENT'){
    const userpatient = plainToClass(patient, input);
    userpatient.user=savedUser

    console.log(userpatient,input);
    const retpat=await this.patientRepository.save(userpatient);
    }

    if(a==='DOCTOR'){
      const userpatient = plainToClass(Doctor, input);
      userpatient.user=savedUser
  
      console.log(userpatient,input);
      const retpat=await this.doctorRepository.save(userpatient);
    }
    if(a==='ADMIN'){
      const userpatient = plainToClass(Admin, input);
      userpatient.user=savedUser
  
      console.log(userpatient,input);
      const retpat=await this.adminRepository.save(userpatient);
    }

    this.logger.log(ctx, `calling ${UserRepository.name}.saveUser`);

    return plainToClass(UserOutput, user, {
      excludeExtraneousValues: true,
    });
  }

  async findByIdInternal(ctx: RequestContext, id: number) {
    this.logger.log(ctx, `${this.findById.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);
    const user = await this.repository.findOne({ where: { id } });

    return user;
  }

  async validateUsernamePassword(
    ctx: RequestContext,
    username: string,
    pass: string,
  ): Promise<UserOutput> {
    this.logger.log(ctx, `${this.validateUsernamePassword.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);
    const user = await this.repository.findOne({ where: { username } });
    if (!user) throw new UnauthorizedException();

    const match = await compare(pass, user.password);
    if (!match) throw new UnauthorizedException();

    return plainToClass(UserOutput, user, {
      excludeExtraneousValues: true,
    });
  }

  async parseAndUpdateUserInformation(ctx: RequestContext, input: string) {
    const parsed = Papa.parse(input, { header: true });
    for (const data of parsed.data) {
      const updateInput = plainToClass(User, data);
      const user = await this.findByUsername(ctx, updateInput.username);
      if (user) {
        const updatedUser: User = {
          ...user,
          ...updateInput,
        };

        this.logger.log(ctx, `calling ${UserRepository.name}.save`);
        await this.repository.save(updatedUser);
      }
    }
  }

  async getUsers(
    ctx: RequestContext,
    limit: number,
    offset: number,
  ): Promise<{ users: any; count: number }> {
    this.logger.log(ctx, `${this.getUsers.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findAndCount`);
    const [users, count] = await this.patientRepository.findAndCount({
      where: {},
      take: limit,
      skip: offset,
    });

    const usersOutput = plainToClass(patient, users, {
      excludeExtraneousValues: true,
    });

    return { users: users, count };
  }

  async findById(ctx: RequestContext, id: number): Promise<any> {
    this.logger.log(ctx, `${this.findById.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);

    const user = await this.repository.findOne({
      where: { id },
     // relations: { affiliation_to_user: true },
    });
    const userid = await this.repository.findOne({ where: { id:ctx.user.id},
      relations: {patients:true} });
  
      const patientIds = userid.patients.map(patient => patient.id);
      var aa= patientIds[0]
      console.log(patientIds);
  
      const pat = await this.patientRepository.findOne({ where: { id: aa } });


  
  
  
   // user.affilation = affilationObj


    delete user.password;

    return pat;
  }

  async findByEmail(ctx: RequestContext, email: string): Promise<UserOutput> {
    this.logger.log(ctx, `${this.findById.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);
    const user = await this.repository.findOne({ where: { email } });

    return plainToClass(UserOutput, user);
  }

  async getUserById(ctx: RequestContext, id: number): Promise<any> {
    this.logger.log(ctx, `${this.getUserById.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.getById`);
    const user = await this.patientRepository.getById(id);
    return user

    return plainToClass(UserOutput, user, {
      excludeExtraneousValues: true,
    });
  }

  async findByUsername(
    ctx: RequestContext,
    username: string,
  ): Promise<UserOutput> {
    this.logger.log(ctx, `${this.findByUsername.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);
    const user = await this.repository.findOne({ where: { username } });

    return plainToClass(UserOutput, user, {
      excludeExtraneousValues: true,
    });
  }

  async updateUser(
    ctx: RequestContext,
    userId: number,
    input: UpdateUserInput,
  ): Promise<UserOutput> {
    this.logger.log(ctx, `${this.updateUser.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.getById`);
    const user = await this.repository.getById(userId);

    // Hash the password if it exists in the input payload.
    if (input.password) {
      input.password = await hash(input.password, 10);
    }

    // merges the input (2nd line) to the found user (1st line)
    const updatedUser: User = {
      ...user,
      ...plainToClass(User, input),
    };

    this.logger.log(ctx, `calling ${UserRepository.name}.save`);
    await this.repository.save(updatedUser);

    return plainToClass(UserOutput, updatedUser, {
      excludeExtraneousValues: true,
    });
  }

  async updateRole(
    ctx: RequestContext,
    input: UpdateRoleDto,
  ): Promise<UserOutput> {
    this.logger.log(ctx, `${this.updateUser.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.getById`);
    const user = await this.repository.findOne({
      where: { username: input.username },
    });

    delete input.username;
    const updatedUser: User = {
      ...user,
      ...plainToClass(User, input),
    };

    this.logger.log(ctx, `calling ${UserRepository.name}.save`);
    await this.repository.save(updatedUser);

    return plainToClass(UserOutput, updatedUser, {
      excludeExtraneousValues: true,
    });
  }

  async Book
    (ctx: RequestContext, id: number,input:BookingInput ) 
   {


    const bookduty = await this.DoctorDutyRepository.findOne({where: {id:id}})
    console.log(bookduty,id)


    if(bookduty[`slot${input.slotnumbder}`] === false)
    {
    bookduty[`slot${input.slotnumbder}`] = true; // Set the selected slot to true
      
    await this.DoctorDutyRepository.save(bookduty); // Save the changes to the database
    }
    else
    {
      throw new Error("Aldeary booked")
    }
    

    const user = await this.doctorRepository.findOne({ where: { id:bookduty.doctorId } });
    console.log(user,input);
    const appoint = new Appointment();

    appoint.doctor = user
    const userid = await this.repository.findOne({ where: { id:ctx.user.id},
    relations: {patients:true} });

    const patientIds = userid.patients.map(patient => patient.id);
    var aa= patientIds[0]
    console.log(patientIds);

    const pat = await this.patientRepository.findOne({ where: { id: aa } });
    appoint.patients = pat;
    appoint.BookingFor = bookduty.dutyDate
    appoint.slotnumbder=input.slotnumbder

    const book=await this.appointmentRepository.save(appoint)
    return {book,message: "Appointment Book"}
    


   }
}
