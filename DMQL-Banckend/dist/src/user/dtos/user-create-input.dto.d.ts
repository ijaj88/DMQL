import { ROLE } from '../../auth/constants/role.constant';
export declare class CreateUserInput {
    username: string;
    password: string;
    affilations?: number[];
    roles: ROLE[];
    email: string;
    isAccountDisabled: boolean;
}
