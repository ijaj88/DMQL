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
exports.LabRepository = exports.PatientLabRepository = exports.PatientMedicineRepository = exports.MedicineRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const medicine_entity_1 = require("../entities/medicine.entity");
const patientservicemedicine_entity_1 = require("../entities/patientservicemedicine.entity");
const patientservicelab_entity_1 = require("../entities/patientservicelab.entity");
const lab_entity_1 = require("../entities/lab.entity");
let MedicineRepository = class MedicineRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(medicine_entity_1.MediceInfo, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getById(id) {
        const user = await this.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
};
MedicineRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], MedicineRepository);
exports.MedicineRepository = MedicineRepository;
let PatientMedicineRepository = class PatientMedicineRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(patientservicemedicine_entity_1.PatientServiceMedicine, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getById(id) {
        const user = await this.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
};
PatientMedicineRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], PatientMedicineRepository);
exports.PatientMedicineRepository = PatientMedicineRepository;
let PatientLabRepository = class PatientLabRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(patientservicelab_entity_1.PatientServiceLab, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getById(id) {
        const user = await this.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
};
PatientLabRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], PatientLabRepository);
exports.PatientLabRepository = PatientLabRepository;
let LabRepository = class LabRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(lab_entity_1.LabInfo, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getById(id) {
        const user = await this.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
};
LabRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], LabRepository);
exports.LabRepository = LabRepository;
//# sourceMappingURL=patientservice.respository.js.map