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
  import { patient } from './patient.entity';
  import { LabInfo } from './lab.entity';

  @Entity('patinetservicelab')
  export class PatientServiceLab {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: true })
    medicinename: string;

  
    @ManyToOne(() => LabInfo, lab => lab.labservice)
    lab: LabInfo;

  
    @CreateDateColumn({ name: 'createdAt', nullable: true })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updatedAt', nullable: true })
    updatedAt: Date;

    @ManyToOne(() => patient, patient => patient.labservice)
    patients: patient;  



  }
  