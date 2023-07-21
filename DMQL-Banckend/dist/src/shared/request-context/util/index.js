"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQuery = exports.createRequestContext = void 0;
const class_transformer_1 = require("class-transformer");
const auth_token_output_dto_1 = require("../../../auth/dtos/auth-token-output.dto");
const constants_1 = require("../../constants");
const request_context_dto_1 = require("../request-context.dto");
function createRequestContext(request) {
    const ctx = new request_context_dto_1.RequestContext();
    ctx.requestID = request.header(constants_1.REQUEST_ID_TOKEN_HEADER);
    ctx.url = request.url;
    ctx.ip = request.header(constants_1.FORWARDED_FOR_TOKEN_HEADER)
        ? request.header(constants_1.FORWARDED_FOR_TOKEN_HEADER)
        : request.ip;
    ctx.user = request.user
        ? (0, class_transformer_1.plainToClass)(auth_token_output_dto_1.UserAccessTokenClaims, request.user, {
            excludeExtraneousValues: true,
        })
        : null;
    return ctx;
}
exports.createRequestContext = createRequestContext;
function buildQuery(query, params) {
    let builtQuery = query;
    for (let i = 0; i < 3; i++) {
        for (const [key, value] of Object.entries(params)) {
            builtQuery = builtQuery.replace(`:${key}`, key === 'toTimestamp' || key === 'fromTimestamp'
                ? `'${value.toISOString()}'`
                : value);
        }
    }
    return builtQuery;
}
exports.buildQuery = buildQuery;
//# sourceMappingURL=index.js.map