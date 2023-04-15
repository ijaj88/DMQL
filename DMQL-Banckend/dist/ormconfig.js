"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const typeorm_1 = require("typeorm");
dotenv.config();
const typeOrmConfig = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : null,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: ['dist/**/*.entity.js'],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    migrationsRun: false,
    synchronize: false,
});
exports.default = typeOrmConfig;
//# sourceMappingURL=ormconfig.js.map