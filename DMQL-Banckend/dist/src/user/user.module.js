"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_auth_strategy_1 = require("../auth/strategies/jwt-auth.strategy");
const shared_module_1 = require("../shared/shared.module");
const user_controller_1 = require("./controllers/user.controller");
const users_entity_1 = require("./entities/users.entity");
const user_repository_1 = require("./repositories/user.repository");
const user_service_1 = require("./services/user.service");
const user_acl_service_1 = require("./services/user-acl.service");
const doctor_controller_1 = require("./controllers/doctor.controller");
const doctor_repository_1 = require("./repositories/doctor.repository");
const doctor_schedule_repository_1 = require("./repositories/doctor.schedule.repository");
const admin_repository_1 = require("./repositories/admin.repository");
const doctor_service_1 = require("./services/doctor.service");
const patient_repository_1 = require("./repositories/patient.repository");
const appointment_repository_1 = require("./repositories/appointment.repository");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_module_1.SharedModule, typeorm_1.TypeOrmModule.forFeature([users_entity_1.User])],
        providers: [user_service_1.UserService, jwt_auth_strategy_1.JwtAuthStrategy, user_acl_service_1.UserAclService,
            user_repository_1.UserRepository, doctor_service_1.DoctorService,
            doctor_repository_1.DoctorRepository, doctor_schedule_repository_1.DoctorDutyRepository, admin_repository_1.AdminRepository,
            patient_repository_1.PatientRepository, appointment_repository_1.AppoitmentRepository],
        controllers: [user_controller_1.UserController, doctor_controller_1.DoctorController],
        exports: [user_service_1.UserService, doctor_service_1.DoctorService, doctor_repository_1.DoctorRepository, doctor_schedule_repository_1.DoctorDutyRepository],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map