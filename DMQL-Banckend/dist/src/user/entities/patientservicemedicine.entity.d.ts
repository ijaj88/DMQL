import { MediceInfo } from './medicine.entity';
import { Appointment } from './appointment.entity';
export declare class PatientServiceMedicine {
    id: number;
    medicine: MediceInfo;
    createdAt: Date;
    updatedAt: Date;
    appointments: Appointment;
}
