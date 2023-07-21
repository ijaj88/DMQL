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
  import {PatientServiceMedicine} from '../entities/patientservicemedicine.entity'


  @Entity('medicine')
  export class MediceInfo {
    @PrimaryGeneratedColumn()
    id: number;
  
  
    @Column({ nullable: true })
    medicinename: string;


    @OneToMany(() => PatientServiceMedicine, PatientServiceMedicine => PatientServiceMedicine.medicine)
    medservice: PatientServiceMedicine[]; 
  
  

  }
  