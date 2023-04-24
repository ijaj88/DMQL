import { patient } from './patient.entity';
import { Doctor } from './doctor.entity';
import { Admin } from './admin.entity';
export declare class User {
    id: number;
    password: string;
    username: string;
    roles: string[];
    isAccountDisabled: boolean;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    patients: patient[];
    doctors: Doctor[];
    admins: Admin[];
}
