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
var AppController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const logger_service_1 = require("./shared/logger/logger.service");
const req_context_decorator_1 = require("./shared/request-context/req-context.decorator");
const request_context_dto_1 = require("./shared/request-context/request-context.dto");
let AppController = AppController_1 = class AppController {
    constructor(logger, appService) {
        this.logger = logger;
        this.appService = appService;
        this.logger.setContext(AppController_1.name);
    }
    getHello(ctx) {
        this.logger.log(ctx, 'Hello world from App controller');
        return this.appService.getHello(ctx);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, req_context_decorator_1.ReqContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext]),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = AppController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [logger_service_1.AppLogger,
        app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map