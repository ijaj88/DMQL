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
exports.Doctor = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../entities/users.entity");
const appointment_entity_1 = require("./appointment.entity");
let Doctor = class Doctor {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Doctor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Doctor.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Doctor.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Doctor.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Doctor.prototype, "speciality", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Doctor.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Unique)('username_d', ['username']),
    (0, typeorm_1.Column)({ length: 200 }),
    __metadata("design:type", String)
], Doctor.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Doctor.prototype, "isAccountDisabled", void 0);
__decorate([
    (0, typeorm_1.Unique)('email_d', ['email']),
    (0, typeorm_1.Column)({ length: 200, nullable: true }),
    __metadata("design:type", String)
], Doctor.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt', nullable: true }),
    __metadata("design:type", Date)
], Doctor.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt', nullable: true }),
    __metadata("design:type", Date)
], Doctor.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, user => user.doctors),
    __metadata("design:type", users_entity_1.User)
], Doctor.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.Appointment, Appointment => Appointment.doctor),
    __metadata("design:type", Array)
], Doctor.prototype, "appointment", void 0);
Doctor = __decorate([
    (0, typeorm_1.Entity)('doctor')
], Doctor);
exports.Doctor = Doctor;
//# sourceMappingURL=doctor.entity.js.map