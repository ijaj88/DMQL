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
var DoctorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const logger_service_1 = require("../../shared/logger/logger.service");
const user_output_dto_1 = require("../dtos/user-output.dto");
const user_repository_1 = require("../repositories/user.repository");
const doctor_entity_1 = require("../entities/doctor.entity");
const doctor_repository_1 = require("../repositories/doctor.repository");
const doctor_output_dto_1 = require("../dtos/doctor-output.dto");
const typeorm_1 = require("typeorm");
const query_repository_1 = require("../repositories/query.repository");
const doctor_schedule_repository_1 = require("../repositories/doctor.schedule.repository");
const patientservice_respository_1 = require("../repositories/patientservice.respository");
const patientservice_respository_2 = require("../repositories/patientservice.respository");
const patientservice_respository_3 = require("../repositories/patientservice.respository");
const patientservice_respository_4 = require("../repositories/patientservice.respository");
const patientservicelab_entity_1 = require("../entities/patientservicelab.entity");
const patientservicemedicine_entity_1 = require("../entities/patientservicemedicine.entity");
const patient_repository_1 = require("../repositories/patient.repository");
let DoctorService = DoctorService_1 = class DoctorService {
    constructor(repository, logger, doctorRepository, entityManager, QueryRepository, DoctorDutyRepository, PatientLabRepository, MedicineRepository, LabRepository, PatientMedicineRepository, PatientRepository) {
        this.repository = repository;
        this.logger = logger;
        this.doctorRepository = doctorRepository;
        this.entityManager = entityManager;
        this.QueryRepository = QueryRepository;
        this.DoctorDutyRepository = DoctorDutyRepository;
        this.PatientLabRepository = PatientLabRepository;
        this.MedicineRepository = MedicineRepository;
        this.LabRepository = LabRepository;
        this.PatientMedicineRepository = PatientMedicineRepository;
        this.PatientRepository = PatientRepository;
        this.logger.setContext(DoctorService_1.name);
    }
    async createUser(ctx, input) {
        this.logger.log(ctx, `${this.createUser.name} was called`);
        const user = (0, class_transformer_1.plainToClass)(doctor_entity_1.Doctor, input);
        const savedUser = await this.doctorRepository.save(user);
        return (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, user, {
            excludeExtraneousValues: true,
        });
    }
    async findByIdInternal(ctx, id) {
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.findOne`);
        const user = await this.doctorRepository.findOne({ where: { id } });
        return user;
    }
    async getUsers(ctx, limit, offset) {
        this.logger.log(ctx, `${this.getUsers.name} was called`);
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.findAndCount`);
        const [users, count] = await this.doctorRepository.findAndCount({
            where: {},
            take: limit,
            skip: offset,
        });
        const usersOutput = (0, class_transformer_1.plainToClass)(doctor_output_dto_1.DoctOutput, users, {
            excludeExtraneousValues: true,
        });
        return { users: usersOutput, count };
    }
    async findById(ctx, id) {
        this.logger.log(ctx, `${this.findById.name} was called`);
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.findOne`);
        const user = await this.doctorRepository.findOne({
            where: { id },
        });
        return user;
    }
    async GetSlots(ctx, id) {
        const params = { age: 26, userId: 6, doctorId: id };
        const query = await this.QueryRepository.findOne({ where: { id: 1 } });
        const rs = await this.buildQ(query.queries, params);
        const result = await this.entityManager.query(rs);
        return result;
    }
    async GeneralQuery(id) {
        const query = await this.QueryRepository.findOne({ where: { id } });
        const result = await this.entityManager.query(query.queries);
        return result;
    }
    async buildQ(queryString, params) {
        let replacedQuery = queryString;
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const value = params[key];
                replacedQuery = replacedQuery.replace(`:${key}`, value);
            }
        }
        console.log(replacedQuery);
        return replacedQuery;
    }
    async PatientMedserve(ctx, id, input) {
        const med = await this.MedicineRepository.findOne({
            where: { id: input.servicenumder },
        });
        const appoint = new patientservicemedicine_entity_1.PatientServiceMedicine();
        const pat = await this.PatientRepository.getById(id);
        appoint.patients = pat;
        appoint.medicine = med;
        console.log(pat, med);
        const medservice = await this.PatientMedicineRepository.save(appoint);
        return medservice;
    }
    async PatientLabserve(ctx, id, input) {
        const med = await this.LabRepository.findOne({
            where: { id: input.servicenumder },
        });
        const appoint = new patientservicelab_entity_1.PatientServiceLab();
        const pat = await this.PatientRepository.getById(id);
        appoint.patients = pat;
        appoint.lab = med;
        console.log(pat, med);
        const medservice = await this.PatientLabRepository.save(appoint);
        return medservice;
    }
    async MedicineList(ctx, limit, offset) {
        const a = await this.MedicineRepository.find({
            where: {},
            take: limit,
            skip: offset,
        });
        return a;
    }
    async LabList(ctx, limit, offset) {
        const a = await this.LabRepository.find({
            where: {},
            take: limit,
            skip: offset,
        });
        return a;
    }
};
DoctorService = DoctorService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        logger_service_1.AppLogger,
        doctor_repository_1.DoctorRepository,
        typeorm_1.EntityManager,
        query_repository_1.QueryRepository,
        doctor_schedule_repository_1.DoctorDutyRepository,
        patientservice_respository_2.PatientLabRepository,
        patientservice_respository_3.MedicineRepository,
        patientservice_respository_4.LabRepository,
        patientservice_respository_1.PatientMedicineRepository,
        patient_repository_1.PatientRepository])
], DoctorService);
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map