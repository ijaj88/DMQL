import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1682791999841 implements MigrationInterface {
    name = 'migrations1682791999841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "patinetservicemedicine" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "medicineId" integer, "patientsId" integer, CONSTRAINT "PK_da7dddfa767cc2b8716d25105be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "patinetservicemedicine" ADD CONSTRAINT "FK_6fb7120da5bde91e86852eaae0b" FOREIGN KEY ("medicineId") REFERENCES "medicine"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patinetservicemedicine" ADD CONSTRAINT "FK_f9c19043c1c237c53d1b73f676d" FOREIGN KEY ("patientsId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patinetservicemedicine" DROP CONSTRAINT "FK_f9c19043c1c237c53d1b73f676d"`);
        await queryRunner.query(`ALTER TABLE "patinetservicemedicine" DROP CONSTRAINT "FK_6fb7120da5bde91e86852eaae0b"`);
        await queryRunner.query(`DROP TABLE "patinetservicemedicine"`);
    }

}
