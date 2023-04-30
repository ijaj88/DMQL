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
exports.billingdetails = void 0;
const typeorm_1 = require("typeorm");
const appointment_entity_1 = require("./appointment.entity");
const patient_entity_1 = require("./patient.entity");
const insurance_entity_1 = require("../entities/insurance.entity");
let billingdetails = class billingdetails {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], billingdetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], billingdetails.prototype, "Amount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt', nullable: true }),
    __metadata("design:type", Date)
], billingdetails.prototype, "admittedon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.patient, patient => patient.billing),
    __metadata("design:type", patient_entity_1.patient)
], billingdetails.prototype, "patients", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => appointment_entity_1.Appointment, Appointment => Appointment.billing),
    __metadata("design:type", appointment_entity_1.Appointment)
], billingdetails.prototype, "appointments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => insurance_entity_1.InsuranceInfo, InsuranceInfo => InsuranceInfo.billing),
    __metadata("design:type", insurance_entity_1.InsuranceInfo)
], billingdetails.prototype, "insurances", void 0);
billingdetails = __decorate([
    (0, typeorm_1.Entity)('billing')
], billingdetails);
exports.billingdetails = billingdetails;
//# sourceMappingURL=bill.entity.js.map