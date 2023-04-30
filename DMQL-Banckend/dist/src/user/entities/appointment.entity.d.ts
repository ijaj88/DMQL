import { patient } from './patient.entity';
import { Doctor } from './doctor.entity';
import { billingdetails } from './bill.entity';
export declare class Appointment {
    id: number;
    BookedAt: Date;
    updatedAt: Date;
    BookingFor: Date;
    doctor: Doctor;
    patients: patient;
    slotnumbder: number;
    billing: billingdetails[];
}
