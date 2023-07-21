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
exports.PatientServiceLab = void 0;
const typeorm_1 = require("typeorm");
const lab_entity_1 = require("./lab.entity");
const appointment_entity_1 = require("./appointment.entity");
let PatientServiceLab = class PatientServiceLab {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PatientServiceLab.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PatientServiceLab.prototype, "medicinename", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lab_entity_1.LabInfo, lab => lab.labservice),
    __metadata("design:type", lab_entity_1.LabInfo)
], PatientServiceLab.prototype, "lab", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt', nullable: true }),
    __metadata("design:type", Date)
], PatientServiceLab.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt', nullable: true }),
    __metadata("design:type", Date)
], PatientServiceLab.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => appointment_entity_1.Appointment, Appointment => Appointment.labservice),
    __metadata("design:type", appointment_entity_1.Appointment)
], PatientServiceLab.prototype, "appointments", void 0);
PatientServiceLab = __decorate([
    (0, typeorm_1.Entity)('patinetservicelab')
], PatientServiceLab);
exports.PatientServiceLab = PatientServiceLab;
//# sourceMappingURL=patientservicelab.entity.js.map