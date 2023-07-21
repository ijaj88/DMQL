import { Appointment } from './appointment.entity';
import { InsuranceInfo } from '../entities/insurance.entity';
export declare class billingdetails {
    id: number;
    Amount: number;
    admittedon: Date;
    appointments: Appointment;
    insurances: InsuranceInfo;
}
