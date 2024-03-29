"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configModuleOptions = void 0;
const Joi = require("@hapi/joi");
const configuration_1 = require("./configuration");
exports.configModuleOptions = {
    envFilePath: '.env',
    load: [configuration_1.default],
    validationSchema: Joi.object({
        APP_ENV: Joi.string()
            .valid('development', 'production', 'test')
            .default('development'),
        APP_PORT: Joi.number().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().optional(),
        DB_NAME: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASS: Joi.string().required(),
        JWT_PUBLIC_KEY_BASE64: Joi.string().required(),
        JWT_PRIVATE_KEY_BASE64: Joi.string().required(),
        JWT_ACCESS_TOKEN_EXP_IN_SEC: Joi.number().required(),
        JWT_REFRESH_TOKEN_EXP_IN_SEC: Joi.number().required(),
        DEFAULT_ADMIN_USER_PASSWORD: Joi.string().required(),
    }),
};
//# sourceMappingURL=module-options.js.map