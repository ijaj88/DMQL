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



  @Entity('patienthistory')
  export class patienthistory {
    @PrimaryGeneratedColumn()
    id: number;
  


    @Column({ nullable: true })
    medicaldiagnosis: string;
    
    @Column({ nullable: true })
    bloodgroup: string;
 
    @Column({ nullable: true })
    isDischarged: boolean;

    @CreateDateColumn({ name: 'createdAt', nullable: true })
    admittedon: Date;
  
    @UpdateDateColumn({ name: 'updatedAt', nullable: true })
    updatedAt: Date;
   
    @ManyToOne(() => patient, patient => patient.patientlog)
    patients: patient;  

    @ManyToOne(() => Doctor, Doctor => Doctor.patientlog)
    doctors: Doctor;  





    


    
    
  }
  