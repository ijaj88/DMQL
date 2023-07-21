import { DataSource, Repository } from 'typeorm';
import { patient } from '../entities/patient.entity';
export declare class PatientRepository extends Repository<patient> {
    private dataSource;
    constructor(dataSource: DataSource);
    getById(id: number): Promise<patient>;
}
