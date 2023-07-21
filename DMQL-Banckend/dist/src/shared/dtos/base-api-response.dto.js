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
exports.BaseApiErrorResponse = exports.BaseApiErrorObject = exports.SwaggerBaseApiResponse = exports.BaseApiResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class BaseApiResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: Object }),
    __metadata("design:type", Object)
], BaseApiResponse.prototype, "meta", void 0);
exports.BaseApiResponse = BaseApiResponse;
function SwaggerBaseApiResponse(type) {
    class ExtendedBaseApiResponse extends BaseApiResponse {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type }),
        __metadata("design:type", Object)
    ], ExtendedBaseApiResponse.prototype, "data", void 0);
    const isAnArray = Array.isArray(type) ? ' [ ] ' : '';
    Object.defineProperty(ExtendedBaseApiResponse, 'name', {
        value: `SwaggerBaseApiResponseFor ${type} ${isAnArray}`,
    });
    return ExtendedBaseApiResponse;
}
exports.SwaggerBaseApiResponse = SwaggerBaseApiResponse;
class BaseApiErrorObject {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], BaseApiErrorObject.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BaseApiErrorObject.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    __metadata("design:type", String)
], BaseApiErrorObject.prototype, "localizedMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BaseApiErrorObject.prototype, "errorName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Object }),
    __metadata("design:type", Object)
], BaseApiErrorObject.prototype, "details", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BaseApiErrorObject.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BaseApiErrorObject.prototype, "requestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BaseApiErrorObject.prototype, "timestamp", void 0);
exports.BaseApiErrorObject = BaseApiErrorObject;
class BaseApiErrorResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: BaseApiErrorObject }),
    __metadata("design:type", BaseApiErrorObject)
], BaseApiErrorResponse.prototype, "error", void 0);
exports.BaseApiErrorResponse = BaseApiErrorResponse;
//# sourceMappingURL=base-api-response.dto.js.map