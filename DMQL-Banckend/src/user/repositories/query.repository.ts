import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { QueryBook } from '../entities/querystat.entity'

@Injectable()
export class QueryRepository extends Repository<QueryBook> {
  constructor(private dataSource: DataSource) {
    super(QueryBook, dataSource.createEntityManager());
  }

  async getById(id: number): Promise<QueryBook> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
