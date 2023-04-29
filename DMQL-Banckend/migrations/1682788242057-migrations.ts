import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1682788242057 implements MigrationInterface {
    name = 'migrations1682788242057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lab" ("id" SERIAL NOT NULL, "TestName" character varying, CONSTRAINT "PK_5575ab9332d71474261beb799a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "patinetservicelab" ("id" SERIAL NOT NULL, "medicinename" character varying, "labId" integer, CONSTRAINT "PK_62787c9983f7c7f3355082e9d72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "medicine" ("id" SERIAL NOT NULL, "medicinename" character varying, CONSTRAINT "PK_b9e0e6f37b7cadb5f402390928b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "patinetservicelab" ADD CONSTRAINT "FK_b6b9dfdb64bca728c4b5c3c7ecc" FOREIGN KEY ("labId") REFERENCES "lab"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patinetservicelab" DROP CONSTRAINT "FK_b6b9dfdb64bca728c4b5c3c7ecc"`);
        await queryRunner.query(`DROP TABLE "medicine"`);
        await queryRunner.query(`DROP TABLE "patinetservicelab"`);
        await queryRunner.query(`DROP TABLE "lab"`);
    }

}
