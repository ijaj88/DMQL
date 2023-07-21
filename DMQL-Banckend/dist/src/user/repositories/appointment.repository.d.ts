import { DataSource, Repository } from 'typeorm';
import { Appointment } from '../entities/appointment.entity';
export declare class AppoitmentRepository extends Repository<Appointment> {
    private dataSource;
    constructor(dataSource: DataSource);
    getById(id: number): Promise<Appointment>;
}
