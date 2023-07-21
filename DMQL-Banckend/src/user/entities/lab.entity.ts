import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { User } from '../entities/users.entity';

  import {PatientServiceLab} from '../entities/patientservicelab.entity'

  @Entity('lab')
  export class LabInfo {
    @PrimaryGeneratedColumn()
    id: number;
  
  
    @Column({ nullable: true })
    TestName: string;


    @OneToMany(() => PatientServiceLab, PatientServiceLab => PatientServiceLab.lab)
    labservice: PatientServiceLab[]; 
  

  }
  