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
exports.UserRefreshTokenClaims = exports.UserAccessTokenClaims = exports.AuthTokenOutput = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class AuthTokenOutput {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuthTokenOutput.prototype, "accessToken", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuthTokenOutput.prototype, "refreshToken", void 0);
exports.AuthTokenOutput = AuthTokenOutput;
class UserAccessTokenClaims {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserAccessTokenClaims.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserAccessTokenClaims.prototype, "username", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserAccessTokenClaims.prototype, "roles", void 0);
exports.UserAccessTokenClaims = UserAccessTokenClaims;
class UserRefreshTokenClaims {
}
exports.UserRefreshTokenClaims = UserRefreshTokenClaims;
//# sourceMappingURL=auth-token-output.dto.js.map