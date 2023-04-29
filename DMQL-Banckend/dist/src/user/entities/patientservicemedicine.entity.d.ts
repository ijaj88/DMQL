import { patient } from './patient.entity';
import { MediceInfo } from './medicine.entity';
export declare class PatientServiceMedicine {
    id: number;
    medicine: MediceInfo;
    createdAt: Date;
    updatedAt: Date;
    patients: patient;
}
