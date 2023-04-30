import { Appointment } from './appointment.entity';
import { patient } from './patient.entity';
import { InsuranceInfo } from '../entities/insurance.entity';
export declare class billingdetails {
    id: number;
    Amount: number;
    admittedon: Date;
    patients: patient;
    appointments: Appointment;
    insurances: InsuranceInfo;
}
