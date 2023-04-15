import { ROLE } from 'src/auth/constants/role.constant';
export declare class UpdateUserInput {
    name: string;
    password: string;
    ethnicity: string;
    department: string;
    age: number;
    level: string;
    race: string;
    gender: string;
    roles: ROLE[];
}
export declare class UpdateRoleDto {
    username: string;
    roles: ROLE[];
}
