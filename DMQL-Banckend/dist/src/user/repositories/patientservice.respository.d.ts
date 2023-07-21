import { DataSource, Repository } from 'typeorm';
import { MediceInfo } from '../entities/medicine.entity';
import { PatientServiceMedicine } from '../entities/patientservicemedicine.entity';
import { PatientServiceLab } from '../entities/patientservicelab.entity';
import { LabInfo } from '../entities/lab.entity';
export declare class MedicineRepository extends Repository<MediceInfo> {
    private dataSource;
    constructor(dataSource: DataSource);
    getById(id: number): Promise<MediceInfo>;
}
export declare class PatientMedicineRepository extends Repository<PatientServiceMedicine> {
    private dataSource;
    constructor(dataSource: DataSource);
    getById(id: number): Promise<PatientServiceMedicine>;
}
export declare class PatientLabRepository extends Repository<PatientServiceLab> {
    private dataSource;
    constructor(dataSource: DataSource);
    getById(id: number): Promise<PatientServiceLab>;
}
export declare class LabRepository extends Repository<LabInfo> {
    private dataSource;
    constructor(dataSource: DataSource);
    getById(id: number): Promise<LabInfo>;
}
