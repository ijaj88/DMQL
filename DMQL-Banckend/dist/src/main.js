"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const constants_1 = require("./shared/constants");
const request_id_middleware_1 = require("./shared/middlewares/request-id/request-id.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe(constants_1.VALIDATION_PIPE_OPTIONS));
    app.use(request_id_middleware_1.RequestIdMiddleware);
    app.enableCors({
        origin: '*',
        exposedHeaders: ['Authorization'],
    });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Attendance Tracker BFF APIs')
        .setDescription('The Attendance Tracker BFF APIs description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('port');
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map