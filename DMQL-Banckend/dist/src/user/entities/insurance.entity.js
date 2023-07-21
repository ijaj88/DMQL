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
exports.InsuranceInfo = void 0;
const typeorm_1 = require("typeorm");
const patient_entity_1 = require("./patient.entity");
const bill_entity_1 = require("./bill.entity");
let InsuranceInfo = class InsuranceInfo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InsuranceInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], InsuranceInfo.prototype, "policyno", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InsuranceInfo.prototype, "insurancecompany", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.patient, patient => patient.insurance),
    __metadata("design:type", patient_entity_1.patient)
], InsuranceInfo.prototype, "patients", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bill_entity_1.billingdetails, billingdetails => billingdetails.insurances),
    __metadata("design:type", Array)
], InsuranceInfo.prototype, "billing", void 0);
InsuranceInfo = __decorate([
    (0, typeorm_1.Entity)('insurance')
], InsuranceInfo);
exports.InsuranceInfo = InsuranceInfo;
//# sourceMappingURL=insurance.entity.js.map