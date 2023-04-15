"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1681420282447 = void 0;
class migrations1681420282447 {
    constructor() {
        this.name = 'migrations1681420282447';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`affiliationtouser\` (\`affiliation_to_userId\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`spaceId\` int NOT NULL, \`affiliationId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`affiliation_to_userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`affiliationtouser\` ADD CONSTRAINT \`FK_bcef9ce15e4f99dd13143dac2c0\` FOREIGN KEY (\`affiliationId\`) REFERENCES \`Affliation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`affiliationtouser\` ADD CONSTRAINT \`FK_8492c8850146f7f1d50a5e0247a\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`affiliationtouser\` DROP FOREIGN KEY \`FK_8492c8850146f7f1d50a5e0247a\``);
        await queryRunner.query(`ALTER TABLE \`affiliationtouser\` DROP FOREIGN KEY \`FK_bcef9ce15e4f99dd13143dac2c0\``);
        await queryRunner.query(`DROP TABLE \`affiliationtouser\``);
    }
}
exports.migrations1681420282447 = migrations1681420282447;
//# sourceMappingURL=1681420282447-migrations.js.map