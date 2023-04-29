import { DataSource, Repository } from 'typeorm';
import { QueryBook } from '../entities/querystat.entity';
export declare class QueryRepository extends Repository<QueryBook> {
    private dataSource;
    constructor(dataSource: DataSource);
    getById(id: number): Promise<QueryBook>;
}
