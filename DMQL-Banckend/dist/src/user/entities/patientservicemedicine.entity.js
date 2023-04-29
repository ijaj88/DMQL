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
exports.PatientServiceMedicine = void 0;
const typeorm_1 = require("typeorm");
const patient_entity_1 = require("./patient.entity");
const medicine_entity_1 = require("./medicine.entity");
let PatientServiceMedicine = class PatientServiceMedicine {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PatientServiceMedicine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medicine_entity_1.MediceInfo, medicine => medicine.medservice),
    __metadata("design:type", medicine_entity_1.MediceInfo)
], PatientServiceMedicine.prototype, "medicine", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt', nullable: true }),
    __metadata("design:type", Date)
], PatientServiceMedicine.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt', nullable: true }),
    __metadata("design:type", Date)
], PatientServiceMedicine.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.patient, patient => patient.medservice),
    __metadata("design:type", patient_entity_1.patient)
], PatientServiceMedicine.prototype, "patients", void 0);
PatientServiceMedicine = __decorate([
    (0, typeorm_1.Entity)('patinetservicemedicine')
], PatientServiceMedicine);
exports.PatientServiceMedicine = PatientServiceMedicine;
//# sourceMappingURL=patientservicemedicine.entity.js.map