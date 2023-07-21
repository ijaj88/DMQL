import { ROLE } from '../../auth/constants/role.constant';
export declare class UserOutput {
    id: number;
    name: string;
    ethnicity: string;
    race: string;
    age: string;
    gender: string;
    department: string;
    level: string;
    username: string;
    roles: ROLE[];
    email: string;
    isAccountDisabled: boolean;
    createdAt: string;
    updatedAt: string;
}
