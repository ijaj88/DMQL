"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1682225689698 = void 0;
class migrations1682225689698 {
    constructor() {
        this.name = 'migrations1682225689698';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`doctor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`password\` varchar(255) NOT NULL, \`firstname\` varchar(255) NULL, \`lastname\` varchar(255) NULL, \`sex\` varchar(255) NULL, \`speciality\` varchar(255) NULL, \`age\` int NULL, \`username\` varchar(200) NOT NULL, \`roles\` text NULL, \`isAccountDisabled\` tinyint NULL, \`email\` varchar(200) NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`username\` (\`username\`), UNIQUE INDEX \`email\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`password\` varchar(255) NOT NULL, \`firstname\` varchar(255) NULL, \`lastname\` varchar(255) NULL, \`sex\` varchar(255) NULL, \`age\` varchar(255) NULL, \`phonenumber\` int NULL, \`emergencycontact\` int NULL, \`username\` varchar(200) NOT NULL, \`roles\` text NULL, \`isAccountDisabled\` tinyint NULL, \`email\` varchar(200) NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`username\` (\`username\`), UNIQUE INDEX \`email\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`email\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`username\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`email\` ON \`doctor\``);
        await queryRunner.query(`DROP INDEX \`username\` ON \`doctor\``);
        await queryRunner.query(`DROP TABLE \`doctor\``);
    }
}
exports.migrations1682225689698 = migrations1682225689698;
//# sourceMappingURL=1682225689698-migrations.js.map