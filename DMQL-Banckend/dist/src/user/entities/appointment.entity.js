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
exports.Appointment = void 0;
const typeorm_1 = require("typeorm");
const patient_entity_1 = require("./patient.entity");
const doctor_entity_1 = require("./doctor.entity");
const bill_entity_1 = require("./bill.entity");
const patientservicelab_entity_1 = require("../entities/patientservicelab.entity");
const patientservicemedicine_entity_1 = require("../entities/patientservicemedicine.entity");
let Appointment = class Appointment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Appointment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt', nullable: true }),
    __metadata("design:type", Date)
], Appointment.prototype, "BookedAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt', nullable: true }),
    __metadata("design:type", Date)
], Appointment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Appointment.prototype, "BookingFor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.Doctor, Doctor => Doctor.appointment),
    __metadata("design:type", doctor_entity_1.Doctor)
], Appointment.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.patient, patient => patient.appointment),
    __metadata("design:type", patient_entity_1.patient)
], Appointment.prototype, "patients", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Appointment.prototype, "slotnumbder", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bill_entity_1.billingdetails, billingdetails => billingdetails.appointments),
    __metadata("design:type", Array)
], Appointment.prototype, "billing", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => patientservicelab_entity_1.PatientServiceLab, PatientServiceLab => PatientServiceLab.appointments),
    __metadata("design:type", Array)
], Appointment.prototype, "labservice", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => patientservicemedicine_entity_1.PatientServiceMedicine, PatientServiceMedicine => PatientServiceMedicine.appointments),
    __metadata("design:type", Array)
], Appointment.prototype, "medservice", void 0);
Appointment = __decorate([
    (0, typeorm_1.Entity)('appointment')
], Appointment);
exports.Appointment = Appointment;
//# sourceMappingURL=appointment.entity.js.map