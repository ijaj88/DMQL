import { DataSource, Repository } from 'typeorm';
import { Doctor } from '../entities/doctor.entity';
export declare class DoctorRepository extends Repository<Doctor> {
    private dataSource;
    constructor(dataSource: DataSource);
    getById(id: number): Promise<Doctor>;
}
