import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { patient } from '../entities/patient.entity';

@Injectable()
export class PatientRepository extends Repository<patient> {
  constructor(private dataSource: DataSource) {
    super(patient, dataSource.createEntityManager());
  }

  async getById(id: number): Promise<patient> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
