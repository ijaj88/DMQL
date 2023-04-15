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
exports.RegisterInput = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const role_constant_1 = require("../constants/role.constant");
class RegisterInput {
    constructor() {
        this.roles = [role_constant_1.ROLE.USER];
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'hkakkad' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterInput.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pkpk1212' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(6, 100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterInput.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: [1, 2, 3] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], RegisterInput.prototype, "affilations", void 0);
exports.RegisterInput = RegisterInput;
//# sourceMappingURL=auth-register-input.dto.js.map