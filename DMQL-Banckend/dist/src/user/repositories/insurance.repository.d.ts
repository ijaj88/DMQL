import { DataSource, Repository } from 'typeorm';
import { InsuranceInfo } from '../entities/insurance.entity';
export declare class insuranceRepository extends Repository<InsuranceInfo> {
    private dataSource;
    constructor(dataSource: DataSource);
    getById(id: number): Promise<InsuranceInfo>;
}
