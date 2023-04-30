import { LabInfo } from './lab.entity';
import { Appointment } from './appointment.entity';
export declare class PatientServiceLab {
    id: number;
    medicinename: string;
    lab: LabInfo;
    createdAt: Date;
    updatedAt: Date;
    appointments: Appointment;
}
