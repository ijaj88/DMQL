import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtAuthStrategy } from '../auth/strategies/jwt-auth.strategy';
import { SharedModule } from '../shared/shared.module';
import { UserController } from './controllers/user.controller';
import { User } from './entities/users.entity';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { UserAclService } from './services/user-acl.service';
import  {DoctorController} from './controllers/doctor.controller';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([User])],
  providers: [UserService, JwtAuthStrategy, UserAclService, UserRepository],
  controllers: [UserController,DoctorController],
  exports: [UserService],
})
export class UserModule {}
