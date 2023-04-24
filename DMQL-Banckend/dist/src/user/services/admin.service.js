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
var AdminService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const logger_service_1 = require("../../shared/logger/logger.service");
const user_output_dto_1 = require("../dtos/user-output.dto");
const user_repository_1 = require("../repositories/user.repository");
const doctor_entity_1 = require("../entities/doctor.entity");
const doctor_repository_1 = require("../repositories/doctor.repository");
const admin_repository_1 = require("../repositories/admin.repository");
let AdminService = AdminService_1 = class AdminService {
    constructor(repository, logger, doctorRepository, adminRepository) {
        this.repository = repository;
        this.logger = logger;
        this.doctorRepository = doctorRepository;
        this.adminRepository = adminRepository;
        this.logger.setContext(AdminService_1.name);
    }
    async createUser(ctx, input) {
        this.logger.log(ctx, `${this.createUser.name} was called`);
        const user = (0, class_transformer_1.plainToClass)(doctor_entity_1.Doctor, input);
        const savedUser = await this.adminRepository.save(user);
        return (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, user, {
            excludeExtraneousValues: true,
        });
    }
    async findByIdInternal(ctx, id) {
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.findOne`);
        const user = await this.adminRepository.findOne({ where: { id } });
        return user;
    }
};
AdminService = AdminService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        logger_service_1.AppLogger,
        doctor_repository_1.DoctorRepository,
        admin_repository_1.AdminRepository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map