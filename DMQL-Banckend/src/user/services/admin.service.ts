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
import { Admin } from '../entities/admin.entity';
import { AdminRepository } from '../repositories/admin.repository';


@Injectable()
export class AdminService {
  constructor(
    private repository: UserRepository,
    private readonly logger: AppLogger,
    private readonly doctorRepository: DoctorRepository,
    private readonly adminRepository: AdminRepository,

  ) {
    this.logger.setContext(AdminService.name);
  }
  async createUser(
    ctx: RequestContext,
    input: CreateUserInput,
  ): Promise<UserOutput> {
    this.logger.log(ctx, `${this.createUser.name} was called`);
    const user = plainToClass(Doctor, input);

   // user.password = await hash(input.password, 10);

    const savedUser = await this.adminRepository.save(user);
    return plainToClass(UserOutput, user, {
      excludeExtraneousValues: true,
    });
  }

  async findByIdInternal(ctx: RequestContext, id: number) {
   // this.logger.log(ctx, `${this.findById.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);
    const user = await this.adminRepository.findOne({ where: { id } });

    return user;
  }

  /*
  async validateUsernamePassword(
    ctx: RequestContext,
    username: string,
    pass: string,
  ): Promise<UserOutput> {
    
    this.logger.log(ctx, `${this.validateUsernamePassword.name} was called`);

    this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);
    const user = await this.adminRepository.findOne({ where: { username } });
    if (!user) throw new UnauthorizedException();

    const match = await compare(pass, user.password);
    if (!match) throw new UnauthorizedException();

    return plainToClass(UserOutput, user, {
      excludeExtraneousValues: true,
    })
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
    const [users, count] = await this.adminRepository.findAndCount({
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

    const user = await this.adminRepository.findOne({
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
    const user = await this.adminRepository.getById(id);

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
    const updatedUser: Admin = {
      ...user,
      ...plainToClass(Admin, input),
    };

    this.logger.log(ctx, `calling ${UserRepository.name}.save`);
    await this.adminRepository.save(updatedUser);

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
  */
}
