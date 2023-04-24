"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1682310529022 = void 0;
class migrations1682310529022 {
    constructor() {
        this.name = 'migrations1682310529022';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`appointment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`BookingFor\` datetime NULL, \`slotnumbder\` int NULL, \`doctorId\` int NULL, \`patientsId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` ADD \`slot1\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` ADD \`slot2\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` ADD \`slot3\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` ADD \`slot4\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` ADD \`slot5\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` ADD \`slot6\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` ADD \`slot7\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD CONSTRAINT \`FK_514bcc3fb1b8140f85bf1cde6e2\` FOREIGN KEY (\`doctorId\`) REFERENCES \`doctor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD CONSTRAINT \`FK_06d5844328549d9f10541076311\` FOREIGN KEY (\`patientsId\`) REFERENCES \`patient\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP FOREIGN KEY \`FK_06d5844328549d9f10541076311\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP FOREIGN KEY \`FK_514bcc3fb1b8140f85bf1cde6e2\``);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` DROP COLUMN \`slot7\``);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` DROP COLUMN \`slot6\``);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` DROP COLUMN \`slot5\``);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` DROP COLUMN \`slot4\``);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` DROP COLUMN \`slot3\``);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` DROP COLUMN \`slot2\``);
        await queryRunner.query(`ALTER TABLE \`DoctorDuty\` DROP COLUMN \`slot1\``);
        await queryRunner.query(`DROP TABLE \`appointment\``);
    }
}
exports.migrations1682310529022 = migrations1682310529022;
//# sourceMappingURL=1682310529022-migrations.js.map