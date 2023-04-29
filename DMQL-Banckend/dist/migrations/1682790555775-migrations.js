"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1682790555775 = void 0;
class migrations1682790555775 {
    constructor() {
        this.name = 'migrations1682790555775';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "patinetservicelab" ADD "createdAt" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" ADD "updatedAt" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" ADD "patientsId" integer`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" ADD CONSTRAINT "FK_05fce13523695f76f99b248a881" FOREIGN KEY ("patientsId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "patinetservicelab" DROP CONSTRAINT "FK_05fce13523695f76f99b248a881"`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" DROP COLUMN "patientsId"`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" DROP COLUMN "createdAt"`);
    }
}
exports.migrations1682790555775 = migrations1682790555775;
//# sourceMappingURL=1682790555775-migrations.js.map