"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1682884199132 = void 0;
class migrations1682884199132 {
    constructor() {
        this.name = 'migrations1682884199132';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "patinetservicelab" DROP CONSTRAINT "FK_05fce13523695f76f99b248a881"`);
        await queryRunner.query(`ALTER TABLE "patinetservicemedicine" DROP CONSTRAINT "FK_f9c19043c1c237c53d1b73f676d"`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" RENAME COLUMN "patientsId" TO "appointmentsId"`);
        await queryRunner.query(`ALTER TABLE "patinetservicemedicine" RENAME COLUMN "patientsId" TO "appointmentsId"`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" ADD CONSTRAINT "FK_8b5aa3978d76283d9a88adf4b80" FOREIGN KEY ("appointmentsId") REFERENCES "appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patinetservicemedicine" ADD CONSTRAINT "FK_816d55b7174ab227d7f3b186576" FOREIGN KEY ("appointmentsId") REFERENCES "appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "patinetservicemedicine" DROP CONSTRAINT "FK_816d55b7174ab227d7f3b186576"`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" DROP CONSTRAINT "FK_8b5aa3978d76283d9a88adf4b80"`);
        await queryRunner.query(`ALTER TABLE "patinetservicemedicine" RENAME COLUMN "appointmentsId" TO "patientsId"`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" RENAME COLUMN "appointmentsId" TO "patientsId"`);
        await queryRunner.query(`ALTER TABLE "patinetservicemedicine" ADD CONSTRAINT "FK_f9c19043c1c237c53d1b73f676d" FOREIGN KEY ("patientsId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" ADD CONSTRAINT "FK_05fce13523695f76f99b248a881" FOREIGN KEY ("patientsId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.migrations1682884199132 = migrations1682884199132;
//# sourceMappingURL=1682884199132-migrations.js.map