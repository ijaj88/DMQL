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
exports.MediceInfo = void 0;
const typeorm_1 = require("typeorm");
const patientservicemedicine_entity_1 = require("../entities/patientservicemedicine.entity");
let MediceInfo = class MediceInfo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MediceInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], MediceInfo.prototype, "medicinename", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => patientservicemedicine_entity_1.PatientServiceMedicine, PatientServiceMedicine => PatientServiceMedicine.medicine),
    __metadata("design:type", Array)
], MediceInfo.prototype, "medservice", void 0);
MediceInfo = __decorate([
    (0, typeorm_1.Entity)('medicine')
], MediceInfo);
exports.MediceInfo = MediceInfo;
//# sourceMappingURL=medicine.entity.js.map