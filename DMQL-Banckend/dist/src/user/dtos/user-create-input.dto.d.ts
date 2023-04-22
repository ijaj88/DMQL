import { ROLE } from '../../auth/constants/role.constant';
export declare class CreateUserInput {
    username: string;
    password: string;
    roles: ROLE[];
    email: string;
    isAccountDisabled: boolean;
}
