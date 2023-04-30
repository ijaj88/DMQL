import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { QueryBook } from '../entities/querystat.entity'
import { MediceInfo } from '../entities/medicine.entity';
import { PatientServiceMedicine } from '../entities/patientservicemedicine.entity';
import { PatientServiceLab } from '../entities/patientservicelab.entity';
import { LabInfo } from '../entities/lab.entity';

@Injectable()
export class MedicineRepository extends Repository<MediceInfo> {
  constructor(private dataSource: DataSource) {
    super(MediceInfo, dataSource.createEntityManager());
  }

  async getById(id: number): Promise<MediceInfo> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}

@Injectable()
export class PatientMedicineRepository extends Repository<PatientServiceMedicine> {
  constructor(private dataSource: DataSource) {
    super(PatientServiceMedicine, dataSource.createEntityManager());
  }

  async getById(id: number): Promise<PatientServiceMedicine> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}

@Injectable()
export class PatientLabRepository extends Repository<PatientServiceLab> {
  constructor(private dataSource: DataSource) {
    super(PatientServiceLab, dataSource.createEntityManager());
  }

  async getById(id: number): Promise<PatientServiceLab> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}

@Injectable()
export class LabRepository extends Repository<LabInfo> {
  constructor(private dataSource: DataSource) {
    super(LabInfo, dataSource.createEntityManager());
  }

  async getById(id: number): Promise<LabInfo> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}


