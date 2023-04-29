"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1682741384586 = void 0;
class migrations1682741384586 {
    constructor() {
        this.name = 'migrations1682741384586';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "doctorduty" ("id" SERIAL NOT NULL, "doctorId" integer NOT NULL, "dutyDate" TIMESTAMP NOT NULL, "startTime" TIME NOT NULL, "endTime" TIME NOT NULL, "appointmentDuration" integer NOT NULL, "slot1" boolean NOT NULL, "slot2" boolean NOT NULL, "slot3" boolean NOT NULL, "slot4" boolean NOT NULL, "slot5" boolean NOT NULL, "slot6" boolean NOT NULL, "slot7" boolean NOT NULL, CONSTRAINT "PK_b35ca8f1c934cd898f61e330d35" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "querybook" ("id" SERIAL NOT NULL, "type" character varying, "queries" character varying NOT NULL, CONSTRAINT "PK_1cdbb97dd54f661d015c6893256" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "querybook"`);
        await queryRunner.query(`DROP TABLE "doctorduty"`);
    }
}
exports.migrations1682741384586 = migrations1682741384586;
//# sourceMappingURL=1682741384586-migrations.js.map