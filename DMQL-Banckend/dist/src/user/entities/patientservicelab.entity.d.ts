import { patient } from './patient.entity';
import { LabInfo } from './lab.entity';
export declare class PatientServiceLab {
    id: number;
    medicinename: string;
    lab: LabInfo;
    createdAt: Date;
    updatedAt: Date;
    patients: patient;
}
