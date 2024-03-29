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
import { PatientMedicineRepository } from '../repositories/patientservice.respository';
import { PatientLabRepository } from '../repositories/patientservice.respository';
import { MedicineRepository } from '../repositories/patientservice.respository';
import { LabRepository } from '../repositories/patientservice.respository';
import { BookingService } from '../dtos/patientservice.dto';
import { PatientRepository } from '../repositories/patient.repository';
import { AppoitmentRepository } from '../repositories/appointment.repository';
import { BillingRepository } from '../repositories/billing.repository';
import { insuranceRepository } from '../repositories/insurance.repository';
export declare class DoctorService {
    private repository;
    private readonly logger;
    private readonly doctorRepository;
    private readonly entityManager;
    private readonly QueryRepository;
    private readonly DoctorDutyRepository;
    private readonly PatientLabRepository;
    private readonly MedicineRepository;
    private readonly LabRepository;
    private readonly PatientMedicineRepository;
    private readonly PatientRepository;
    private readonly AppoitmentRepository;
    private readonly BillingRepository;
    private readonly insuranceRepository;
    constructor(repository: UserRepository, logger: AppLogger, doctorRepository: DoctorRepository, entityManager: EntityManager, QueryRepository: QueryRepository, DoctorDutyRepository: DoctorDutyRepository, PatientLabRepository: PatientLabRepository, MedicineRepository: MedicineRepository, LabRepository: LabRepository, PatientMedicineRepository: PatientMedicineRepository, PatientRepository: PatientRepository, AppoitmentRepository: AppoitmentRepository, BillingRepository: BillingRepository, insuranceRepository: insuranceRepository);
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
    PatientMedserve(ctx: RequestContext, id: number, input: BookingService): Promise<any>;
    PatientLabserve(ctx: RequestContext, id: number, input: BookingService): Promise<any>;
    MedicineList(ctx: RequestContext, limit: number, offset: number): Promise<any>;
    LabList(ctx: RequestContext, limit: number, offset: number): Promise<any>;
    PatientBilling(ctx: RequestContext, id: number, input: BookingService): Promise<any>;
}
