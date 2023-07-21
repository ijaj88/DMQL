import { patient } from './patient.entity';
import { Doctor } from './doctor.entity';
export declare class patienthistory {
    id: number;
    medicaldiagnosis: string;
    bloodgroup: string;
    isDischarged: boolean;
    admittedon: Date;
    updatedAt: Date;
    patients: patient;
    doctors: Doctor;
}
