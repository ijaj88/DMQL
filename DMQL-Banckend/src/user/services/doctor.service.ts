import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { plainToClass } from 'class-transformer';
import * as Papa from 'papaparse';

import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { CreateUserInput } from '../dtos/user-create-input.dto';
import { UserOutput } from '../dtos/user-output.dto';
import { UpdateRoleDto, UpdateUserInput } from '../dtos/user-update-input.dto';
import { User } from '../entities/users.entity';
import { UserRepository } from '../repositories/user.repository';
import { Doctor } from '../entities/doctor.entity';
import { DoctorRepository } from '../repositories/doctor.repository';
import { DoctOutput } from '../dtos/doctor-output.dto';
import { EntityManager } from 'typeorm';

import { QueryBook } from '../entities/querystat.entity'
import { QueryRepository } from '../repositories/query.repository'
import { DoctorDutyRepository } from '../repositories/doctor.schedule.repository';

import { PatientMedicineRepository
} from '../repositories/patientservice.respository';
import { PatientLabRepository } from '../repositories/patientservice.respository'; 
import { MedicineRepository } from '../repositories/patientservice.respository';
import { LabRepository } from '../repositories/patientservice.respository';
import {BookingService} from '../dtos/patientservice.dto'
import { patient } from '../entities/patient.entity';
import { PatientServiceLab
 } from '../entities/patientservicelab.entity';
import { PatientServiceMedicine } from '../entities/patientservicemedicine.entity';
import { PatientRepository } from '../repositories/patient.repository';

@Injectable()
export class DoctorService {
  constructor(
    private repository: UserRepository,
    private readonly logger: AppLogger,
    private readonly doctorRepository: DoctorRepository,
    private readonly entityManager: EntityManager,
    private readonly QueryRepository: QueryRepository,
    private readonly DoctorDutyRepository:DoctorDutyRepository,
    private readonly PatientLabRepository: PatientLabRepository,
    private readonly MedicineRepository: MedicineRepository,
    private readonly LabRepository: LabRepository,
    private readonly PatientMedicineRepository: PatientMedicineRepository,
    private readonly PatientRepository:PatientRepository




  ) {
    this.logger.setContext(DoctorService.name);
  }
  async createUser(
    ctx: RequestContext,
    input: CreateUserInput,
  ): Promise<UserOutput> {
    this.logger.log(ctx, `${this.createUser.name} was called`);
    const user = plainToClass(Doctor, input);

    const savedUser = await this.doctorRepository.save(user);
    return plainToClass(UserOutput, user, {
      excludeExtraneousValues: true,
    });
  }

  async findByIdInternal(ctx: RequestContext, id: number) {
  //  this.logger.log(ctx, `${this.findById.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);
    const user = await this.doctorRepository.findOne({ where: { id } });

    return user;
  }

  async getUsers(
    ctx: RequestContext,
    limit: number,
    offset: number,
  ): Promise<{ users: DoctOutput[]; count: number }> {
    this.logger.log(ctx, `${this.getUsers.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findAndCount`);
    const [users, count] = await this.doctorRepository.findAndCount({
      where: {},
      take: limit,
      skip: offset,
    });

    const usersOutput = plainToClass(DoctOutput, users, {
      excludeExtraneousValues: true,
    });

    return { users: usersOutput, count };
  }

  async findById(ctx: RequestContext, id: number): Promise<DoctOutput> {
    this.logger.log(ctx, `${this.findById.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);

    const user = await this.doctorRepository.findOne({
      where: { id },
     // relations: { affiliation_to_user: true },
    });

    
   // user.affilation = affilationObj

    return user;
  }
  async GetSlots(ctx: RequestContext, id: number) {


    //const query = `SELECT id, CONCAT_WS(', ', CASE WHEN NOT slot4 THEN '4' ELSE NULL END, CASE WHEN NOT slot3 THEN '3' ELSE NULL END) AS availableSlots FROM "public"."DoctorDuty" as DD WHERE DD.id = :doctorId;`
    const params = {age: 26, userId: 6,doctorId:id};
    //const query1 = `SELECT * FROM public.doctor where doctor.age = :age and doctor.sex > ':userId'`;
    const query = await this.QueryRepository.findOne({where:{id:1}})


    const rs = await this.buildQ(query.queries, params);
    const result = await this.entityManager.query(rs);
    return result;
  }


  async GeneralQuery( id: number) {


    
    const query = await this.QueryRepository.findOne({where:{id}})


    const result = await this.entityManager.query(query.queries);
    return result;
  }
  
  async buildQ(queryString: string, params: { [key: string]: any }) {
    let replacedQuery = queryString;
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const value = params[key];
        replacedQuery = replacedQuery.replace(`:${key}`, value);
      }
    }
    console.log(replacedQuery);
    return replacedQuery;
  }

  async PatientMedserve(ctx: RequestContext, id: number,input:BookingService): Promise<any> {

    const med = await this.MedicineRepository.findOne({
      where: { id:input.servicenumder },
     // relations: { affiliation_to_user: true },
    });

    const appoint = new PatientServiceMedicine();
    const pat = await this.PatientRepository.getById(id)

    appoint.patients=pat

    appoint.medicine=med

    console.log(pat,med)
    
    const medservice= await this.PatientMedicineRepository.save(appoint)
    
    


    
   // user.affilation = affilationObj

    return medservice;

  }
  
  async PatientLabserve(ctx: RequestContext, id: number,input:BookingService): Promise<any> {

    const med = await this.LabRepository.findOne({
      where: { id:input.servicenumder },
     // relations: { affiliation_to_user: true },
    });

    const appoint = new PatientServiceLab();
    const pat = await this.PatientRepository.getById(id)

    appoint.patients=pat

    appoint.lab=med

    console.log(pat,med)
    
    const medservice= await this.PatientLabRepository.save(appoint)
    
    
    
   // user.affilation = affilationObj

    return medservice;

  }
  async MedicineList(
    ctx: RequestContext,
    limit: number,
    offset: number,
  ): Promise<any> {


    const a = await this.MedicineRepository.find({
      where: {},
      take: limit,
      skip: offset,
    });
    return a
  }

  async LabList(
    ctx: RequestContext,
    limit: number,
    offset: number,
  ): Promise<any> {


    const a = await this.LabRepository.find({
      where: {},
      take: limit,
      skip: offset,
    });
    return a
  }


/*
  async validateUsernamePassword(
    ctx: RequestContext,
    username: string,
    pass: string,
  ): Promise<UserOutput> {
    this.logger.log(ctx, `${this.validateUsernamePassword.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);
    const user = await this.doctorRepository.findOne({ where: { username } });
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
  ): Promise<{ users: UserOutput[]; count: number }> {
    this.logger.log(ctx, `${this.getUsers.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findAndCount`);
    const [users, count] = await this.doctorRepository.findAndCount({
      where: {},
      take: limit,
      skip: offset,
    });

    const usersOutput = plainToClass(UserOutput, users, {
      excludeExtraneousValues: true,
    });

    return { users: usersOutput, count };
  }

  async findById(ctx: RequestContext, id: number): Promise<Doctor> {
    this.logger.log(ctx, `${this.findById.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);

    const user = await this.doctorRepository.findOne({
      where: { id },
     // relations: { affiliation_to_user: true },
    });

    
   // user.affilation = affilationObj


    delete user.password;

    return user;
  }

  async findByEmail(ctx: RequestContext, email: string): Promise<UserOutput> {
    this.logger.log(ctx, `${this.findById.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);
    const user = await this.doctorRepository.findOne({ where: { email } });

    return plainToClass(UserOutput, user);
  }

  async getUserById(ctx: RequestContext, id: number): Promise<UserOutput> {
    this.logger.log(ctx, `${this.getUserById.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.getById`);
    const user = await this.doctorRepository.getById(id);

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
    const updatedUser: Doctor = {
      ...user,
      ...plainToClass(Doctor, input),
    };

    this.logger.log(ctx, `calling ${UserRepository.name}.save`);
    await this.doctorRepository.save(updatedUser);

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
  }*/
}
