"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1682297195280 = void 0;
class migrations1682297195280 {
    constructor() {
        this.name = 'migrations1682297195280';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`patient\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`patient\` ADD CONSTRAINT \`FK_6636aefca0bdad8933c7cc3e394\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`patient\` DROP FOREIGN KEY \`FK_6636aefca0bdad8933c7cc3e394\``);
        await queryRunner.query(`ALTER TABLE \`patient\` DROP COLUMN \`userId\``);
    }
}
exports.migrations1682297195280 = migrations1682297195280;
//# sourceMappingURL=1682297195280-migrations.js.map