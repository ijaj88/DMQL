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
var LoggingInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const logger_service_1 = require("../logger/logger.service");
const util_1 = require("../request-context/util");
let LoggingInterceptor = LoggingInterceptor_1 = class LoggingInterceptor {
    constructor(appLogger) {
        this.appLogger = appLogger;
        this.appLogger.setContext(LoggingInterceptor_1.name);
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const method = request.method;
        const ctx = (0, util_1.createRequestContext)(request);
        const now = Date.now();
        return next.handle().pipe((0, operators_1.tap)(() => {
            const response = context.switchToHttp().getResponse();
            const statusCode = response.statusCode;
            const responseTime = Date.now() - now;
            const resData = { method, statusCode, responseTime };
            this.appLogger.log(ctx, 'Request completed', { resData });
        }));
    }
};
LoggingInterceptor = LoggingInterceptor_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_service_1.AppLogger])
], LoggingInterceptor);
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=logging.interceptor.js.map