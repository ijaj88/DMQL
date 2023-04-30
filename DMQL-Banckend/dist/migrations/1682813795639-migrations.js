"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1682813795639 = void 0;
class migrations1682813795639 {
    constructor() {
        this.name = 'migrations1682813795639';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "billing" ("id" SERIAL NOT NULL, "Amount" integer, "createdAt" TIMESTAMP DEFAULT now(), "patientsId" integer, "appointmentsId" integer, "insurancesId" integer, CONSTRAINT "PK_d9043caf3033c11ed3d1b29f73c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "insurance" ("id" SERIAL NOT NULL, "policyno" integer, "insurancecompany" character varying, "patientsId" integer, CONSTRAINT "PK_07152a21fd75ea211dcea53e3c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "billing" ADD CONSTRAINT "FK_fc292a5e67f53c6927fd722ced5" FOREIGN KEY ("patientsId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "billing" ADD CONSTRAINT "FK_f68bd568137fa646a7434d107e5" FOREIGN KEY ("appointmentsId") REFERENCES "appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "billing" ADD CONSTRAINT "FK_8f5cd2655e40244988da836db25" FOREIGN KEY ("insurancesId") REFERENCES "insurance"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "insurance" ADD CONSTRAINT "FK_edfded2f09a5769f1112e6e8063" FOREIGN KEY ("patientsId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "insurance" DROP CONSTRAINT "FK_edfded2f09a5769f1112e6e8063"`);
        await queryRunner.query(`ALTER TABLE "billing" DROP CONSTRAINT "FK_8f5cd2655e40244988da836db25"`);
        await queryRunner.query(`ALTER TABLE "billing" DROP CONSTRAINT "FK_f68bd568137fa646a7434d107e5"`);
        await queryRunner.query(`ALTER TABLE "billing" DROP CONSTRAINT "FK_fc292a5e67f53c6927fd722ced5"`);
        await queryRunner.query(`DROP TABLE "insurance"`);
        await queryRunner.query(`DROP TABLE "billing"`);
    }
}
exports.migrations1682813795639 = migrations1682813795639;
//# sourceMappingURL=1682813795639-migrations.js.map