import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1682790555775 implements MigrationInterface {
    name = 'migrations1682790555775'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patinetservicelab" ADD "createdAt" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" ADD "updatedAt" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" ADD "patientsId" integer`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" ADD CONSTRAINT "FK_05fce13523695f76f99b248a881" FOREIGN KEY ("patientsId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patinetservicelab" DROP CONSTRAINT "FK_05fce13523695f76f99b248a881"`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" DROP COLUMN "patientsId"`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" DROP COLUMN "createdAt"`);
    }

}
