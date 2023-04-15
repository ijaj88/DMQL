import { ROLE } from '../constants/role.constant';
export declare class RegisterInput {
    username: string;
    password: string;
    affilations?: number[];
    roles: ROLE[];
    isAccountDisabled: boolean;
}
