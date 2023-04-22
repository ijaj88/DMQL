import { ROLE } from '../constants/role.constant';
export declare class RegisterInput {
    username: string;
    password: string;
    roles: ROLE[];
    isAccountDisabled: boolean;
}
