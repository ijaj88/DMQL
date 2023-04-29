"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1682793503134 = void 0;
class migrations1682793503134 {
    constructor() {
        this.name = 'migrations1682793503134';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "patienthistory" ("id" SERIAL NOT NULL, "medicaldiagnosis" character varying, "bloodgroup" character varying, "isDischarged" boolean, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "patientsId" integer, "doctorsId" integer, CONSTRAINT "PK_cf752bbce4233a56d0408280061" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "patienthistory" ADD CONSTRAINT "FK_1455fc062897361122b6e6dde80" FOREIGN KEY ("patientsId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patienthistory" ADD CONSTRAINT "FK_484f7ccd139213da663d24c0207" FOREIGN KEY ("doctorsId") REFERENCES "doctor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "patienthistory" DROP CONSTRAINT "FK_484f7ccd139213da663d24c0207"`);
        await queryRunner.query(`ALTER TABLE "patienthistory" DROP CONSTRAINT "FK_1455fc062897361122b6e6dde80"`);
        await queryRunner.query(`DROP TABLE "patienthistory"`);
    }
}
exports.migrations1682793503134 = migrations1682793503134;
//# sourceMappingURL=1682793503134-migrations.js.map