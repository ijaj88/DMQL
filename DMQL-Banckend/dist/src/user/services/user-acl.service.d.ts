import { BaseAclService } from '../../shared/acl/acl.service';
import { User } from '../entities/users.entity';
import { Actor } from './../../shared/acl/actor.constant';
export declare class UserAclService extends BaseAclService<User> {
    constructor();
    isUserItself(resource: User, actor: Actor): boolean;
}
