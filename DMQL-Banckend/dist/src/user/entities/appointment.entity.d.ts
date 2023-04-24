import { patient } from './patient.entity';
import { Doctor } from './doctor.entity';
export declare class Appointment {
    id: number;
    BookedAt: Date;
    updatedAt: Date;
    BookingFor: Date;
    doctor: Doctor;
    patients: patient;
    slotnumbder: number;
}
