"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1682295872016 = void 0;
class migrations1682295872016 {
    constructor() {
        this.name = 'migrations1682295872016';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX \`username\` ON \`admin\``);
        await queryRunner.query(`CREATE TABLE \`patient\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstname\` varchar(255) NULL, \`lastname\` varchar(255) NULL, \`sex\` varchar(255) NULL, \`age\` int NULL, \`phonenumber\` int NULL, \`emergencycontact\` int NULL, \`isAccountDisabled\` tinyint NULL, \`email\` varchar(200) NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`email\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP COLUMN \`roles\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`doctor\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`doctor\` DROP COLUMN \`roles\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`age\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`emergencycontact\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`firstname\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`lastname\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phonenumber\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`sex\``);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`sex\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phonenumber\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`lastname\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`firstname\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`emergencycontact\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`age\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`doctor\` ADD \`roles\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`doctor\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD \`username\` varchar(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD \`roles\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP INDEX \`email\` ON \`patient\``);
        await queryRunner.query(`DROP TABLE \`patient\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`username\` ON \`admin\` (\`username\`)`);
    }
}
exports.migrations1682295872016 = migrations1682295872016;
//# sourceMappingURL=1682295872016-migrations.js.map