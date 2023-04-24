import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Admin } from '../entities/admin.entity';

@Injectable()
export class AdminRepository extends Repository<Admin> {
  constructor(private dataSource: DataSource) {
    super(Admin, dataSource.createEntityManager());
  }

  async getById(id: number): Promise<Admin> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
