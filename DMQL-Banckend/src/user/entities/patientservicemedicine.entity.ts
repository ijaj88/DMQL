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
  import {MediceInfo} from './medicine.entity'
  import { Doctor } from './doctor.entity';

  @Entity('patinetservicemedicine')
  export class PatientServiceMedicine {
    @PrimaryGeneratedColumn()
    id: number;
  

    @ManyToOne(() => MediceInfo, medicine => medicine.medservice)
    medicine: MediceInfo;
  
    @CreateDateColumn({ name: 'createdAt', nullable: true })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updatedAt', nullable: true })
    updatedAt: Date;

    @ManyToOne(() => patient, patient => patient.medservice)
    patients: patient;  



  }
  