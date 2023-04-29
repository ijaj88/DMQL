import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1682756400198 implements MigrationInterface {
    name = 'migrations1682756400198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doctor" ("id" SERIAL NOT NULL, "firstname" character varying, "lastname" character varying, "sex" character varying, "speciality" character varying, "age" integer, "username" character varying(200) NOT NULL, "isAccountDisabled" boolean, "email" character varying(200), "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "userId" integer, CONSTRAINT "username_d" UNIQUE ("username"), CONSTRAINT "email_d" UNIQUE ("email"), CONSTRAINT "PK_ee6bf6c8de78803212c548fcb94" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "appointment" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "BookingFor" TIMESTAMP, "slotnumbder" integer, "doctorId" integer, "patientsId" integer, CONSTRAINT "PK_e8be1a53027415e709ce8a2db74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "patient" ("id" SERIAL NOT NULL, "firstname" character varying, "lastname" character varying, "sex" character varying, "age" integer, "phonenumber" integer, "emergencycontact" integer, "isAccountDisabled" boolean, "email" character varying(200), "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "userId" integer, CONSTRAINT "email_p" UNIQUE ("email"), CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "password" character varying NOT NULL, "username" character varying(200) NOT NULL, "roles" text, "isAccountDisabled" boolean, "email" character varying(200), "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), CONSTRAINT "username_u" UNIQUE ("username"), CONSTRAINT "email_u" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "admin" ("id" SERIAL NOT NULL, "firstname" character varying, "lastname" character varying, "sex" character varying, "speciality" character varying, "age" integer, "isAccountDisabled" boolean, "email" character varying(200), "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "userId" integer, CONSTRAINT "email_a" UNIQUE ("email"), CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "doctorduty" ("id" SERIAL NOT NULL, "doctorId" integer NOT NULL, "dutyDate" TIMESTAMP NOT NULL, "startTime" TIME NOT NULL, "endTime" TIME NOT NULL, "appointmentDuration" integer NOT NULL, "slot1" boolean NOT NULL, "slot2" boolean NOT NULL, "slot3" boolean NOT NULL, "slot4" boolean NOT NULL, "slot5" boolean NOT NULL, "slot6" boolean NOT NULL, "slot7" boolean NOT NULL, CONSTRAINT "PK_b35ca8f1c934cd898f61e330d35" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "querybook" ("id" SERIAL NOT NULL, "type" character varying, "queries" character varying NOT NULL, CONSTRAINT "PK_1cdbb97dd54f661d015c6893256" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD CONSTRAINT "FK_e573a17ab8b6eea2b7fe9905fa8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointment" ADD CONSTRAINT "FK_514bcc3fb1b8140f85bf1cde6e2" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointment" ADD CONSTRAINT "FK_06d5844328549d9f10541076311" FOREIGN KEY ("patientsId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patient" ADD CONSTRAINT "FK_6636aefca0bdad8933c7cc3e394" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "FK_f8a889c4362d78f056960ca6dad" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "FK_f8a889c4362d78f056960ca6dad"`);
        await queryRunner.query(`ALTER TABLE "patient" DROP CONSTRAINT "FK_6636aefca0bdad8933c7cc3e394"`);
        await queryRunner.query(`ALTER TABLE "appointment" DROP CONSTRAINT "FK_06d5844328549d9f10541076311"`);
        await queryRunner.query(`ALTER TABLE "appointment" DROP CONSTRAINT "FK_514bcc3fb1b8140f85bf1cde6e2"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP CONSTRAINT "FK_e573a17ab8b6eea2b7fe9905fa8"`);
        await queryRunner.query(`DROP TABLE "querybook"`);
        await queryRunner.query(`DROP TABLE "doctorduty"`);
        await queryRunner.query(`DROP TABLE "admin"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "patient"`);
        await queryRunner.query(`DROP TABLE "appointment"`);
        await queryRunner.query(`DROP TABLE "doctor"`);
    }

}
