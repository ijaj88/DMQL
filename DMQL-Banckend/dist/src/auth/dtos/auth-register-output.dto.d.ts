import { ROLE } from '../constants/role.constant';
export declare class RegisterOutput {
    id: number;
    name: string;
    username: string;
    roles: ROLE[];
    email: string;
    isAccountDisabled: boolean;
    createdAt: string;
    updatedAt: string;
}
