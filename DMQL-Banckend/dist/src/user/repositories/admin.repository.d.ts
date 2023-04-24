import { DataSource, Repository } from 'typeorm';
import { Admin } from '../entities/admin.entity';
export declare class AdminRepository extends Repository<Admin> {
    private dataSource;
    constructor(dataSource: DataSource);
    getById(id: number): Promise<Admin>;
}
