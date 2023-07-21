import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
  } from 'typeorm';
 
 import { User } from '../entities/users.entity';
 import { Appointment } from './appointment.entity';

 import {PatientServiceLab} from '../entities/patientservicelab.entity'
 import {PatientServiceMedicine} from '../entities/patientservicemedicine.entity'
 import { patient } from './patient.entity';
 import { Doctor } from './doctor.entity';
 import {InsuranceInfo} from '../entities/insurance.entity'


  @Entity('billing')
  export class billingdetails {
    @PrimaryGeneratedColumn()
    id: number;
  


    @Column({ nullable: true })
    Amount: number;
    

    @CreateDateColumn({ name: 'createdAt', nullable: true })
    admittedon: Date;
  

   
//    @ManyToOne(() => patient, patient => patient.billing)
//    patients: patient;  

    @ManyToOne(() => Appointment, Appointment => Appointment.billing)
    appointments: Appointment;  


    @ManyToOne(() => InsuranceInfo, InsuranceInfo => InsuranceInfo.billing)
    insurances: InsuranceInfo;  


    
    
  }
  