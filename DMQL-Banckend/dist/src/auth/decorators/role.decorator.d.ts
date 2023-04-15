import { CustomDecorator } from '@nestjs/common';
import { ROLE } from '../constants/role.constant';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: ROLE[]) => CustomDecorator<string>;
