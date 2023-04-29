import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { CreateUserInput } from '../dtos/user-create-input.dto';
import { UserOutput } from '../dtos/user-output.dto';
import { UserRepository } from '../repositories/user.repository';
import { Doctor } from '../entities/doctor.entity';
import { DoctorRepository } from '../repositories/doctor.repository';
import { DoctOutput } from '../dtos/doctor-output.dto';
import { EntityManager } from 'typeorm';
import { QueryRepository } from '../repositories/query.repository';
import { DoctorDutyRepository } from '../repositories/doctor.schedule.repository';
export declare class DoctorService {
    private repository;
    private readonly logger;
    private readonly doctorRepository;
    private readonly entityManager;
    private readonly QueryRepository;
    private readonly DoctorDutyRepository;
    constructor(repository: UserRepository, logger: AppLogger, doctorRepository: DoctorRepository, entityManager: EntityManager, QueryRepository: QueryRepository, DoctorDutyRepository: DoctorDutyRepository);
    createUser(ctx: RequestContext, input: CreateUserInput): Promise<UserOutput>;
    findByIdInternal(ctx: RequestContext, id: number): Promise<Doctor>;
    getUsers(ctx: RequestContext, limit: number, offset: number): Promise<{
        users: DoctOutput[];
        count: number;
    }>;
    findById(ctx: RequestContext, id: number): Promise<DoctOutput>;
    GetSlots(ctx: RequestContext, id: number): Promise<any>;
    GeneralQuery(id: number): Promise<any>;
    buildQ(queryString: string, params: {
        [key: string]: any;
    }): Promise<string>;
}
