"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAclService = void 0;
const action_constant_1 = require("./action.constant");
class BaseAclService {
    constructor() {
        this.aclRules = [];
        this.forActor = (actor) => {
            return {
                canDoAction: (action, resource) => {
                    let canDoAction = false;
                    actor.roles.forEach((actorRole) => {
                        if (canDoAction)
                            return true;
                        const aclRules = this.aclRules.filter((rule) => rule.role === actorRole);
                        aclRules.forEach((aclRule) => {
                            if (canDoAction)
                                return true;
                            const hasActionPermission = aclRule.actions.includes(action) ||
                                aclRule.actions.includes(action_constant_1.Action.Manage);
                            canDoAction =
                                hasActionPermission &&
                                    (!aclRule.ruleCallback || aclRule.ruleCallback(resource, actor));
                        });
                    });
                    return canDoAction;
                },
            };
        };
    }
    canDo(role, actions, ruleCallback) {
        ruleCallback
            ? this.aclRules.push({ role, actions, ruleCallback })
            : this.aclRules.push({ role, actions });
    }
}
exports.BaseAclService = BaseAclService;
//# sourceMappingURL=acl.service.js.map