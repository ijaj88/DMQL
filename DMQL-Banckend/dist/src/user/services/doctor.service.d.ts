import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { CreateUserInput } from '../dtos/user-create-input.dto';
import { UserOutput } from '../dtos/user-output.dto';
import { UserRepository } from '../repositories/user.repository';
import { Doctor } from '../entities/doctor.entity';
import { DoctorRepository } from '../repositories/doctor.repository';
export declare class DoctorService {
    private repository;
    private readonly logger;
    private readonly doctorRepository;
    constructor(repository: UserRepository, logger: AppLogger, doctorRepository: DoctorRepository);
    createUser(ctx: RequestContext, input: CreateUserInput): Promise<UserOutput>;
    findByIdInternal(ctx: RequestContext, id: number): Promise<Doctor>;
}
