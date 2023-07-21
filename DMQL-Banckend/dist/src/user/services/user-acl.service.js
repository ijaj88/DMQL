"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAclService = void 0;
const common_1 = require("@nestjs/common");
const acl_service_1 = require("../../shared/acl/acl.service");
const role_constant_1 = require("./../../auth/constants/role.constant");
const action_constant_1 = require("./../../shared/acl/action.constant");
let UserAclService = class UserAclService extends acl_service_1.BaseAclService {
    constructor() {
        super();
        this.canDo(role_constant_1.ROLE.ADMIN, [action_constant_1.Action.Manage]);
        this.canDo(role_constant_1.ROLE.USER, [action_constant_1.Action.Read]);
        this.canDo(role_constant_1.ROLE.USER, [action_constant_1.Action.Update], this.isUserItself);
    }
    isUserItself(resource, actor) {
        return resource.id === actor.id;
    }
};
UserAclService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UserAclService);
exports.UserAclService = UserAclService;
//# sourceMappingURL=user-acl.service.js.map