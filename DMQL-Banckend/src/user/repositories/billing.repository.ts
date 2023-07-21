import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { DoctorDuty } from '../entities/doctor.schedule.entity';
import { Doctor } from '../entities/doctor.entity';
import { billingdetails } from '../entities/bill.entity';

@Injectable()
export class BillingRepository extends Repository<billingdetails> {
  constructor(private dataSource: DataSource) {
    super(billingdetails, dataSource.createEntityManager());
  }

  async getById(id: number): Promise<billingdetails> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
