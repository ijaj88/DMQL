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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const base_api_response_dto_1 = require("../../shared/dtos/base-api-response.dto");
const logger_service_1 = require("../../shared/logger/logger.service");
const req_context_decorator_1 = require("../../shared/request-context/req-context.decorator");
const request_context_dto_1 = require("../../shared/request-context/request-context.dto");
const auth_login_input_dto_1 = require("../dtos/auth-login-input.dto");
const auth_refresh_token_input_dto_1 = require("../dtos/auth-refresh-token-input.dto");
const auth_register_input_dto_1 = require("../dtos/auth-register-input.dto");
const auth_register_output_dto_1 = require("../dtos/auth-register-output.dto");
const auth_token_output_dto_1 = require("../dtos/auth-token-output.dto");
const jwt_refresh_guard_1 = require("../guards/jwt-refresh.guard");
const local_auth_guard_1 = require("../guards/local-auth.guard");
const auth_service_1 = require("../services/auth.service");
let AuthController = AuthController_1 = class AuthController {
    constructor(authService, logger) {
        this.authService = authService;
        this.logger = logger;
        this.logger.setContext(AuthController_1.name);
    }
    login(ctx, credential) {
        this.logger.log(ctx, `${this.login.name} was called`);
        console.log(ctx.user.username, 'ctx.user.username');
        const authToken = this.authService.login(ctx);
        return { data: authToken, meta: {} };
    }
    async registerLocal(ctx, input) {
        const registeredUser = await this.authService.register(ctx, input);
        return { data: registeredUser, meta: {} };
    }
    async refreshToken(ctx, credential) {
        this.logger.log(ctx, `${this.refreshToken.name} was called`);
        const authToken = await this.authService.refreshToken(ctx);
        return { data: authToken, meta: {} };
    }
};
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({
        summary: 'User login API',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(auth_token_output_dto_1.AuthTokenOutput),
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        type: base_api_response_dto_1.BaseApiErrorResponse,
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext,
        auth_login_input_dto_1.LoginInput]),
    __metadata("design:returntype", base_api_response_dto_1.BaseApiResponse)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({
        summary: 'User registration API',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(auth_register_output_dto_1.RegisterOutput),
    }),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext,
        auth_register_input_dto_1.RegisterInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerLocal", null);
__decorate([
    (0, common_1.Post)('refresh-token'),
    (0, swagger_1.ApiOperation)({
        summary: 'Refresh access token API',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(auth_token_output_dto_1.AuthTokenOutput),
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        type: base_api_response_dto_1.BaseApiErrorResponse,
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_refresh_guard_1.JwtRefreshGuard),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext,
        auth_refresh_token_input_dto_1.RefreshTokenInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
AuthController = AuthController_1 = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        logger_service_1.AppLogger])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map