"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1682301026420 = void 0;
class migrations1682301026420 {
    constructor() {
        this.name = 'migrations1682301026420';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`admin\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`doctor\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD CONSTRAINT \`FK_f8a889c4362d78f056960ca6dad\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`doctor\` ADD CONSTRAINT \`FK_e573a17ab8b6eea2b7fe9905fa8\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`doctor\` DROP FOREIGN KEY \`FK_e573a17ab8b6eea2b7fe9905fa8\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP FOREIGN KEY \`FK_f8a889c4362d78f056960ca6dad\``);
        await queryRunner.query(`ALTER TABLE \`doctor\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP COLUMN \`userId\``);
    }
}
exports.migrations1682301026420 = migrations1682301026420;
//# sourceMappingURL=1682301026420-migrations.js.map