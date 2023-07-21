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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const class_transformer_1 = require("class-transformer");
const logger_service_1 = require("../../shared/logger/logger.service");
const user_service_1 = require("../../user/services/user.service");
const role_constant_1 = require("../constants/role.constant");
const doctor_service_1 = require("../../user/services/doctor.service");
const auth_token_output_dto_1 = require("../dtos/auth-token-output.dto");
let AuthService = AuthService_1 = class AuthService {
    constructor(userService, DoctorService, jwtService, configService, logger) {
        this.userService = userService;
        this.DoctorService = DoctorService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.logger = logger;
        this.logger.setContext(AuthService_1.name);
    }
    async validateUser(ctx, email, pass) {
        this.logger.log(ctx, `${this.validateUser.name} was called`);
        const user = await this.userService.validateUsernamePassword(ctx, email, pass);
        return user;
        return;
    }
    login(ctx) {
        this.logger.log(ctx, `${this.login.name} was called`);
        return this.getAuthToken(ctx, ctx.user);
    }
    async register(ctx, input) {
        this.logger.log(ctx, `${this.register.name} was called`);
        input.isAccountDisabled = false;
        const user = await this.userService.findByEmail(ctx, input.username + '@buffalo.edu');
        if (user) {
            throw new common_1.BadRequestException('User with the email already exists');
        }
        if (input.TYPE === 'PATIENT') {
            input.roles = [role_constant_1.ROLE.PATIENT];
        }
        if (input.TYPE === 'DOCTOR') {
            input.roles = [role_constant_1.ROLE.DOCTOR];
        }
        if (input.TYPE === 'ADMIN') {
            input.roles = [role_constant_1.ROLE.ADMIN];
        }
        console.log(input);
        const registeredUser = await this.userService.createUser(ctx, Object.assign(Object.assign({}, input), { email: input.username + '@buffalo.edu' }));
        return registeredUser;
    }
    async refreshToken(ctx) {
        this.logger.log(ctx, `${this.refreshToken.name} was called`);
        const user = await this.userService.findById(ctx, ctx.user.id);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid user id');
        }
        return this.getAuthToken(ctx, user);
    }
    getAuthToken(ctx, user) {
        this.logger.log(ctx, `${this.getAuthToken.name} was called`);
        const subject = { sub: user.id };
        const payload = {
            username: user.username,
            sub: user.id,
            roles: user.roles,
        };
        const authToken = {
            refreshToken: this.jwtService.sign(subject, {
                expiresIn: this.configService.get('jwt.refreshTokenExpiresInSec'),
            }),
            accessToken: this.jwtService.sign(Object.assign(Object.assign({}, payload), subject), { expiresIn: this.configService.get('jwt.accessTokenExpiresInSec') }),
        };
        return (0, class_transformer_1.plainToClass)(auth_token_output_dto_1.AuthTokenOutput, authToken, {
            excludeExtraneousValues: true,
        });
    }
};
AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        doctor_service_1.DoctorService,
        jwt_1.JwtService,
        config_1.ConfigService,
        logger_service_1.AppLogger])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map