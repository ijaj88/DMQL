"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const role_constant_1 = require("./auth/constants/role.constant");
const request_context_dto_1 = require("./shared/request-context/request-context.dto");
const user_service_1 = require("./user/services/user.service");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const defaultAdminUserPassword = configService.get('defaultAdminUserPassword');
    const userService = app.get(user_service_1.UserService);
    const defaultAdmin = {
        username: 'default-admin',
        password: defaultAdminUserPassword,
        roles: [role_constant_1.ROLE.ADMIN],
        isAccountDisabled: false,
        email: 'default-admin@example.com',
    };
    const ctx = new request_context_dto_1.RequestContext();
    const user = await userService.findByUsername(ctx, defaultAdmin.username);
    if (!user) {
        await userService.createUser(ctx, defaultAdmin);
    }
    await app.close();
}
bootstrap();
//# sourceMappingURL=cli.js.map