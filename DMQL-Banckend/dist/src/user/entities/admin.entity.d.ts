import { User } from '../entities/users.entity';
export declare class Admin {
    id: number;
    firstname: string;
    lastname: string;
    sex: string;
    speciality: string;
    age: number;
    isAccountDisabled: boolean;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
