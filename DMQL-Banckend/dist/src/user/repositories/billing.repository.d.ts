import { DataSource, Repository } from 'typeorm';
import { billingdetails } from '../entities/bill.entity';
export declare class BillingRepository extends Repository<billingdetails> {
    private dataSource;
    constructor(dataSource: DataSource);
    getById(id: number): Promise<billingdetails>;
}
