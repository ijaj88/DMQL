import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Admin } from '../entities/admin.entity';
import { InsuranceInfo } from '../entities/insurance.entity';

@Injectable()
export class insuranceRepository extends Repository<InsuranceInfo> {
  constructor(private dataSource: DataSource) {
    super(InsuranceInfo, dataSource.createEntityManager());
  }

  async getById(id: number): Promise<InsuranceInfo> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
