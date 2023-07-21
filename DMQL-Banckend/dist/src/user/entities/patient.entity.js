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
exports.patient = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../entities/users.entity");
const appointment_entity_1 = require("./appointment.entity");
const patienthistory_entity_1 = require("../entities/patienthistory.entity");
const insurance_entity_1 = require("../entities/insurance.entity");
let patient = class patient {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], patient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], patient.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], patient.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], patient.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], patient.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], patient.prototype, "phonenumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], patient.prototype, "emergencycontact", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], patient.prototype, "isAccountDisabled", void 0);
__decorate([
    (0, typeorm_1.Unique)('email_p', ['email']),
    (0, typeorm_1.Column)({ length: 200, nullable: true }),
    __metadata("design:type", String)
], patient.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt', nullable: true }),
    __metadata("design:type", Date)
], patient.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt', nullable: true }),
    __metadata("design:type", Date)
], patient.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, user => user.patients),
    __metadata("design:type", users_entity_1.User)
], patient.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.Appointment, Appointment => Appointment.patients),
    __metadata("design:type", Array)
], patient.prototype, "appointment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => patienthistory_entity_1.patienthistory, patienthistory => patienthistory.patients),
    __metadata("design:type", Array)
], patient.prototype, "patientlog", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => insurance_entity_1.InsuranceInfo, InsuranceInfo => InsuranceInfo.patients),
    __metadata("design:type", Array)
], patient.prototype, "insurance", void 0);
patient = __decorate([
    (0, typeorm_1.Entity)('patient')
], patient);
exports.patient = patient;
//# sourceMappingURL=patient.entity.js.map