import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { DoctorDuty } from '../entities/doctor.schedule.entity';
import { Doctor } from '../entities/doctor.entity';

@Injectable()
export class DoctorDutyRepository extends Repository<DoctorDuty> {
  constructor(private dataSource: DataSource) {
    super(DoctorDuty, dataSource.createEntityManager());
  }

  async getById(id: number): Promise<DoctorDuty> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
