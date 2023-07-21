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
exports.AdminRegister = exports.DoctorRegister = exports.patientRegister = exports.RegisterInput = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class RegisterInput {
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
    (0, swagger_1.ApiProperty)({ example: 'ADMIN/DOCTOR' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(4, 100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterInput.prototype, "TYPE", void 0);
exports.RegisterInput = RegisterInput;
class patientRegister {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ijaj' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], patientRegister.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pkpk1212' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(6, 100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], patientRegister.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PATIENT' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(4, 100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], patientRegister.prototype, "TYPE", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ijaj' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], patientRegister.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ahmed' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], patientRegister.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'male' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], patientRegister.prototype, "sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '26' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], patientRegister.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '89899826' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], patientRegister.prototype, "phonenumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '89899826' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], patientRegister.prototype, "emergencycontact", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], patientRegister.prototype, "isAccountDisabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ijaj@buffalo.hmail' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], patientRegister.prototype, "email", void 0);
exports.patientRegister = patientRegister;
class DoctorRegister {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ijaj' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DoctorRegister.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pkpk1212' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(6, 100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DoctorRegister.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'DOCTOR' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(4, 100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DoctorRegister.prototype, "TYPE", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ijaj' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DoctorRegister.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ahmed' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DoctorRegister.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'male' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DoctorRegister.prototype, "sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '26' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DoctorRegister.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Neuro' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DoctorRegister.prototype, "speciality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], DoctorRegister.prototype, "isAccountDisabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ijaj@buffalo.hmail' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DoctorRegister.prototype, "email", void 0);
exports.DoctorRegister = DoctorRegister;
class AdminRegister {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ijaj' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdminRegister.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pkpk1212' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(6, 100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdminRegister.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ADMIN' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(4, 100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdminRegister.prototype, "TYPE", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ijaj' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AdminRegister.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ahmed' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AdminRegister.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'male' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AdminRegister.prototype, "sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '26' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AdminRegister.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Owner' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AdminRegister.prototype, "speciality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], AdminRegister.prototype, "isAccountDisabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ijaj@buffalo.hmail' }),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AdminRegister.prototype, "email", void 0);
exports.AdminRegister = AdminRegister;
//# sourceMappingURL=auth-register-input.dto.js.map