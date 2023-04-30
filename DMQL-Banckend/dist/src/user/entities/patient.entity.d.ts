import { User } from '../entities/users.entity';
import { Appointment } from './appointment.entity';
import { patienthistory } from '../entities/patienthistory.entity';
import { InsuranceInfo } from '../entities/insurance.entity';
export declare class patient {
    id: number;
    firstname: string;
    lastname: string;
    sex: string;
    age: number;
    phonenumber: number;
    emergencycontact: number;
    isAccountDisabled: boolean;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    appointment: Appointment[];
    patientlog: patienthistory[];
    insurance: InsuranceInfo[];
}
