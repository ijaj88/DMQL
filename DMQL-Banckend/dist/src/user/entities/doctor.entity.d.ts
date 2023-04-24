import { User } from '../entities/users.entity';
import { Appointment } from './appointment.entity';
export declare class Doctor {
    id: number;
    firstname: string;
    lastname: string;
    sex: string;
    speciality: string;
    age: number;
    username: string;
    isAccountDisabled: boolean;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    appointment: Appointment[];
}
