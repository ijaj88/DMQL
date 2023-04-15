"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1681585403233 = void 0;
class migrations1681585403233 {
    constructor() {
        this.name = 'migrations1681585403233';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`password\` varchar(255) NOT NULL, \`ethnicity\` varchar(255) NULL, \`race\` varchar(255) NULL, \`level\` varchar(255) NULL, \`gender\` varchar(255) NULL, \`department\` varchar(255) NULL, \`age\` int NULL, \`username\` varchar(200) NOT NULL, \`roles\` text NULL, \`isAccountDisabled\` tinyint NULL, \`email\` varchar(200) NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`username\` (\`username\`), UNIQUE INDEX \`email\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`email\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`username\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }
}
exports.migrations1681585403233 = migrations1681585403233;
//# sourceMappingURL=1681585403233-migrations.js.map