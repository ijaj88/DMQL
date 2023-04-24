import { DataSource, Repository } from 'typeorm';
import { DoctorDuty } from '../entities/doctor.schedule.entity';
export declare class DoctorDutyRepository extends Repository<DoctorDuty> {
    private dataSource;
    constructor(dataSource: DataSource);
    getById(id: number): Promise<DoctorDuty>;
}
