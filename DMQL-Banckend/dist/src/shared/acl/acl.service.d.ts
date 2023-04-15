import { ROLE } from './../../auth/constants/role.constant';
import { AclRule, RuleCallback } from './acl-rule.constant';
import { Action } from './action.constant';
import { Actor } from './actor.constant';
export declare class BaseAclService<Resource> {
    protected aclRules: AclRule<Resource>[];
    protected canDo(role: ROLE, actions: Action[], ruleCallback?: RuleCallback<Resource>): void;
    forActor: (actor: Actor) => any;
}
