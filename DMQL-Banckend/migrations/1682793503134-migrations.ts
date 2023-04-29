import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1682793503134 implements MigrationInterface {
    name = 'migrations1682793503134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "patienthistory" ("id" SERIAL NOT NULL, "medicaldiagnosis" character varying, "bloodgroup" character varying, "isDischarged" boolean, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "patientsId" integer, "doctorsId" integer, CONSTRAINT "PK_cf752bbce4233a56d0408280061" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "patienthistory" ADD CONSTRAINT "FK_1455fc062897361122b6e6dde80" FOREIGN KEY ("patientsId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patienthistory" ADD CONSTRAINT "FK_484f7ccd139213da663d24c0207" FOREIGN KEY ("doctorsId") REFERENCES "doctor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patienthistory" DROP CONSTRAINT "FK_484f7ccd139213da663d24c0207"`);
        await queryRunner.query(`ALTER TABLE "patienthistory" DROP CONSTRAINT "FK_1455fc062897361122b6e6dde80"`);
        await queryRunner.query(`DROP TABLE "patienthistory"`);
    }

}
