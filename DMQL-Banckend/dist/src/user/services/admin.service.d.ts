import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { CreateUserInput } from '../dtos/user-create-input.dto';
import { UserOutput } from '../dtos/user-output.dto';
import { UserRepository } from '../repositories/user.repository';
import { DoctorRepository } from '../repositories/doctor.repository';
import { Admin } from '../entities/admin.entity';
import { AdminRepository } from '../repositories/admin.repository';
export declare class AdminService {
    private repository;
    private readonly logger;
    private readonly doctorRepository;
    private readonly adminRepository;
    constructor(repository: UserRepository, logger: AppLogger, doctorRepository: DoctorRepository, adminRepository: AdminRepository);
    createUser(ctx: RequestContext, input: CreateUserInput): Promise<UserOutput>;
    findByIdInternal(ctx: RequestContext, id: number): Promise<Admin>;
}
