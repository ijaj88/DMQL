import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Appointment } from '../entities/appointment.entity';

@Injectable()
export class AppoitmentRepository extends Repository<Appointment> {
  constructor(private dataSource: DataSource) {
    super(Appointment, dataSource.createEntityManager());
  }

  async getById(id: number): Promise<Appointment> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
