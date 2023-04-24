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
import { DoctorRepository } from './repositories/doctor.repository';
import { DoctorDutyRepository } from './repositories/doctor.schedule.repository';
import { AdminRepository } from './repositories/admin.repository';
import { DoctorService } from './services/doctor.service';
import { PatientRepository } from './repositories/patient.repository';
import { AppoitmentRepository} from './repositories/appointment.repository'
@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([User])],
  providers: [UserService, JwtAuthStrategy, UserAclService,
     UserRepository,DoctorService,
    DoctorRepository,DoctorDutyRepository,AdminRepository,
    PatientRepository,AppoitmentRepository],
  controllers: [UserController,DoctorController],
  exports: [UserService,DoctorService,DoctorRepository,DoctorDutyRepository],
})
export class UserModule {}
