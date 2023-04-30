import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
  } from 'typeorm';
  import { patient } from './patient.entity';
  import { Doctor } from './doctor.entity';
  import { Admin } from './admin.entity';

  import { billingdetails } from './bill.entity';
  import {PatientServiceLab} from '../entities/patientservicelab.entity'
  import {PatientServiceMedicine} from '../entities/patientservicemedicine.entity'

  
  @Entity('appointment')
  export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;
  
    @CreateDateColumn({ name: 'createdAt', nullable: true })
    BookedAt: Date;
  
    @UpdateDateColumn({ name: 'updatedAt', nullable: true })
    updatedAt: Date;
  
    @Column({ nullable: true })
    BookingFor: Date; 

    @ManyToOne(() => Doctor, Doctor => Doctor.appointment)
    doctor: Doctor;    

    @ManyToOne(() => patient, patient => patient.appointment)
    patients: patient;  
    @Column({ nullable: true })
    slotnumbder: number; 

    @OneToMany(() => billingdetails, billingdetails => billingdetails.appointments)
    billing: billingdetails[]; 


    @OneToMany(() => PatientServiceLab, PatientServiceLab => PatientServiceLab.appointments)
    labservice: PatientServiceLab[]; 

    @OneToMany(() => PatientServiceMedicine, PatientServiceMedicine => PatientServiceMedicine.appointments)
    medservice: PatientServiceMedicine[]; 



    
  }
  
