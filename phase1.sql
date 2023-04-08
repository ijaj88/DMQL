-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public."AppointmentSchedule"
(
    "AppointmentID" integer NOT NULL,
    "DoctorID" integer,
    "PatientID" integer,
    "Isdircharged" boolean DEFAULT false,
    CONSTRAINT "AppointmentSchedule_pkey" PRIMARY KEY ("AppointmentID")
);

CREATE TABLE IF NOT EXISTS public."DoctorInfo"
(
    "DoctorID" bigint NOT NULL,
    "FirstName" character varying(256) COLLATE pg_catalog."default",
    "LastName" character varying(256) COLLATE pg_catalog."default",
    "Age" integer,
    "Sex" character varying(20) COLLATE pg_catalog."default",
    "Speciality" character varying(40) COLLATE pg_catalog."default",
    CONSTRAINT "Doctor_info_pkey" PRIMARY KEY ("DoctorID")
);

CREATE TABLE IF NOT EXISTS public."DoctorWeeklyDuty"
(
    "DayWeek" character varying(256) COLLATE pg_catalog."default",
    "StartTime" time without time zone,
    "EndTime" time without time zone,
    "DoctorID" integer
);

CREATE TABLE IF NOT EXISTS public."PatientHistory"
(
    "HistoryID" bigint NOT NULL,
    "PatientID" bigint,
    "AdmittedOn" date,
    "DischargedOn" date,
    "BloodGroup" character(20) COLLATE pg_catalog."default",
    "DoctorID" bigint,
    "MedicalDiagnosed" character varying(256) COLLATE pg_catalog."default"
);

CREATE TABLE IF NOT EXISTS public."PatientInfo"
(
    "PatientID" bigint NOT NULL,
    "FirstName" character varying(256) COLLATE pg_catalog."default",
    "LastName" character varying(256) COLLATE pg_catalog."default",
    "Sex" character varying(20) COLLATE pg_catalog."default",
    "Age" integer,
    "PhoneNumber" bigint,
    "Address" character varying(256) COLLATE pg_catalog."default",
    "EmergencyContact" bigint,
    CONSTRAINT "PatientInfo_pkey" PRIMARY KEY ("PatientID")
);

CREATE TABLE IF NOT EXISTS public."PatientService"
(
    "ServiceID" integer NOT NULL,
    "LabID" integer,
    "PharmacyID" integer,
    "PatientID" integer,
    CONSTRAINT "PatientService_pkey" PRIMARY KEY ("ServiceID")
);

CREATE TABLE IF NOT EXISTS public."Lab"
(
    "LabID" integer NOT NULL,
    "TestName" character varying(256) COLLATE pg_catalog."default",
    CONSTRAINT "Lab_pkey" PRIMARY KEY ("LabID")
);

CREATE TABLE IF NOT EXISTS public."Medicine"
(
    "PharmacyId" integer NOT NULL,
    "Medicines" character varying COLLATE pg_catalog."default",
    CONSTRAINT "Medicine_pkey" PRIMARY KEY ("PharmacyId")
);

CREATE TABLE IF NOT EXISTS public."Bill"
(
    "BillID" integer NOT NULL,
    "PatientID" integer,
    "AppointmentID" integer,
    "TotalBill" numeric,
    "InsuranceID" integer,
    CONSTRAINT "Bill_pkey" PRIMARY KEY ("BillID")
);

CREATE TABLE IF NOT EXISTS public."InsuranceInfo"
(
    "InsuranceID" integer NOT NULL,
    "PatientID" integer,
    "PolicyNo" integer,
    "InsuranceCompany" character varying COLLATE pg_catalog."default",
    "CopayAmount" numeric,
    CONSTRAINT "InsuranceInfo_pkey" PRIMARY KEY ("InsuranceID")
);

ALTER TABLE IF EXISTS public."AppointmentSchedule"
    ADD CONSTRAINT "AppointmentSchedule_DoctorID_fkey" FOREIGN KEY ("DoctorID")
    REFERENCES public."DoctorInfo" ("DoctorID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."AppointmentSchedule"
    ADD CONSTRAINT "AppointmentSchedule_PatientID_fkey" FOREIGN KEY ("PatientID")
    REFERENCES public."PatientInfo" ("PatientID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."DoctorWeeklyDuty"
    ADD CONSTRAINT "DoctorWeeklyDuty_DoctorID_fkey" FOREIGN KEY ("DoctorID")
    REFERENCES public."DoctorInfo" ("DoctorID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."PatientHistory"
    ADD CONSTRAINT "PatientHistory_DoctorID_fkey" FOREIGN KEY ("DoctorID")
    REFERENCES public."DoctorInfo" ("DoctorID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."PatientHistory"
    ADD CONSTRAINT "PatientHistory_PatientID_fkey" FOREIGN KEY ("PatientID")
    REFERENCES public."PatientInfo" ("PatientID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."PatientService"
    ADD CONSTRAINT "PatientService_LabID_fkey" FOREIGN KEY ("LabID")
    REFERENCES public."Lab" ("LabID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."PatientService"
    ADD CONSTRAINT "PatientService_LabID_fkey1" FOREIGN KEY ("LabID")
    REFERENCES public."Lab" ("LabID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."PatientService"
    ADD CONSTRAINT "PatientService_PatientID_fkey" FOREIGN KEY ("PatientID")
    REFERENCES public."PatientInfo" ("PatientID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."PatientService"
    ADD CONSTRAINT "PatientService_PharmacyID_fkey" FOREIGN KEY ("PharmacyID")
    REFERENCES public."Medicine" ("PharmacyId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."PatientService"
    ADD CONSTRAINT "PatientService_PharmacyID_fkey1" FOREIGN KEY ("PharmacyID")
    REFERENCES public."Medicine" ("PharmacyId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Bill"
    ADD CONSTRAINT "Bill_AppointmentID_fkey" FOREIGN KEY ("AppointmentID")
    REFERENCES public."AppointmentSchedule" ("AppointmentID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Bill"
    ADD CONSTRAINT "Bill_AppointmentID_fkey1" FOREIGN KEY ("AppointmentID")
    REFERENCES public."AppointmentSchedule" ("AppointmentID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Bill"
    ADD CONSTRAINT "Bill_InsuranceID_fkey" FOREIGN KEY ("InsuranceID")
    REFERENCES public."InsuranceInfo" ("InsuranceID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Bill"
    ADD CONSTRAINT "Bill_InsuranceID_fkey1" FOREIGN KEY ("InsuranceID")
    REFERENCES public."InsuranceInfo" ("InsuranceID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Bill"
    ADD CONSTRAINT "Bill_PatientID_fkey" FOREIGN KEY ("PatientID")
    REFERENCES public."PatientInfo" ("PatientID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."InsuranceInfo"
    ADD CONSTRAINT "InsuranceInfo_PatientID_fkey" FOREIGN KEY ("PatientID")
    REFERENCES public."PatientInfo" ("PatientID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;