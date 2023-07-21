import { ROLE } from '../constants/role.constant';
export declare class RegisterInput {
    username: string;
    password: string;
    TYPE: string;
    roles: ROLE[];
    isAccountDisabled: boolean;
}
export declare class patientRegister {
    username: string;
    password: string;
    TYPE: string;
    roles: ROLE[];
    firstname?: string;
    lastname?: string;
    sex?: string;
    age?: number;
    phonenumber?: number;
    emergencycontact?: number;
    isAccountDisabled: boolean;
    email: string;
}
export declare class DoctorRegister {
    username: string;
    password: string;
    TYPE: string;
    roles: ROLE[];
    firstname?: string;
    lastname?: string;
    sex?: string;
    age?: number;
    speciality?: string;
    isAccountDisabled: boolean;
    email: string;
}
export declare class AdminRegister {
    username: string;
    password: string;
    TYPE: string;
    roles: ROLE[];
    firstname?: string;
    lastname?: string;
    sex?: string;
    age?: number;
    speciality?: string;
    isAccountDisabled: boolean;
    email: string;
}
