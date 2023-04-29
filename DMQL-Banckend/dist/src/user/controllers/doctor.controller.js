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
var DoctorController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const base_api_response_dto_1 = require("../../shared/dtos/base-api-response.dto");
const pagination_params_dto_1 = require("../../shared/dtos/pagination-params.dto");
const logger_service_1 = require("../../shared/logger/logger.service");
const req_context_decorator_1 = require("../../shared/request-context/req-context.decorator");
const request_context_dto_1 = require("../../shared/request-context/request-context.dto");
const user_output_dto_1 = require("../dtos/user-output.dto");
const user_update_input_dto_1 = require("../dtos/user-update-input.dto");
const user_service_1 = require("../services/user.service");
const doctor_service_1 = require("../services/doctor.service");
let DoctorController = DoctorController_1 = class DoctorController {
    constructor(userService, DoctorService, logger) {
        this.userService = userService;
        this.DoctorService = DoctorService;
        this.logger = logger;
        this.logger.setContext(DoctorController_1.name);
    }
    async getMyProfile(ctx) {
        this.logger.log(ctx, `${this.getMyProfile.name} was called`);
        const user = await this.DoctorService.findById(ctx, ctx.user.id);
        return { data: user, meta: {} };
    }
    async getUsers(ctx, query) {
        this.logger.log(ctx, `${this.getUsers.name} was called`);
        const { users, count } = await this.DoctorService.getUsers(ctx, query.limit, query.offset);
        console.log(users);
        return { data: users, meta: { count } };
    }
    async getUser(ctx, id) {
        this.logger.log(ctx, `${this.getUser.name} was called`);
        const user = await this.DoctorService.findById(ctx, id);
        return { data: user, meta: {} };
    }
    async updateUser(ctx, input) {
        this.logger.log(ctx, `${this.updateUser.name} was called`);
        const user = await this.userService.updateUser(ctx, ctx.user.id, input);
        return { data: user, meta: {} };
    }
    async geDoctorSlots(ctx, id) {
        this.logger.log(ctx, `${this.getUser.name} was called`);
        const user = await this.DoctorService.GetSlots(ctx, id);
        return { data: user, meta: {} };
    }
    async MasterQueries(ctx, id) {
        this.logger.log(ctx, `${this.getUser.name} was called`);
        const user = await this.DoctorService.GeneralQuery(id);
        return { data: user, meta: {} };
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get user me API',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(user_output_dto_1.UserOutput),
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        type: base_api_response_dto_1.BaseApiErrorResponse,
    }),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getMyProfile", null);
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get users as a list API',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)([user_output_dto_1.UserOutput]),
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        type: base_api_response_dto_1.BaseApiErrorResponse,
    }),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext,
        pagination_params_dto_1.PaginationParamsDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getUsers", null);
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get user by id API',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(user_output_dto_1.UserOutput),
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        type: base_api_response_dto_1.BaseApiErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        type: base_api_response_dto_1.BaseApiErrorResponse,
    }),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext, Number]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Update user API',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(user_output_dto_1.UserOutput),
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        type: base_api_response_dto_1.BaseApiErrorResponse,
    }),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext,
        user_update_input_dto_1.UpdateUserInput]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "updateUser", null);
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)('Availabilty/:doctorId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get doctor slots by id API',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(user_output_dto_1.UserOutput),
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        type: base_api_response_dto_1.BaseApiErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        type: base_api_response_dto_1.BaseApiErrorResponse,
    }),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Param)('doctorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext, Number]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "geDoctorSlots", null);
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)('QueryMaster/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get doctor slots by id API',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(user_output_dto_1.UserOutput),
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        type: base_api_response_dto_1.BaseApiErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        type: base_api_response_dto_1.BaseApiErrorResponse,
    }),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext, Number]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "MasterQueries", null);
DoctorController = DoctorController_1 = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users/doctor'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        doctor_service_1.DoctorService,
        logger_service_1.AppLogger])
], DoctorController);
exports.DoctorController = DoctorController;
//# sourceMappingURL=doctor.controller.js.map