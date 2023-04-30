import { patient } from './patient.entity';
import { Doctor } from './doctor.entity';
import { billingdetails } from './bill.entity';
import { PatientServiceLab } from '../entities/patientservicelab.entity';
import { PatientServiceMedicine } from '../entities/patientservicemedicine.entity';
export declare class Appointment {
    id: number;
    BookedAt: Date;
    updatedAt: Date;
    BookingFor: Date;
    doctor: Doctor;
    patients: patient;
    slotnumbder: number;
    billing: billingdetails[];
    labservice: PatientServiceLab[];
    medservice: PatientServiceMedicine[];
}
