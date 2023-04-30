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
  import { patient } from './patient.entity';
  import { billingdetails } from './bill.entity';


  @Entity('insurance')
  export class InsuranceInfo {
    @PrimaryGeneratedColumn()
    id: number;
  
  
    @Column({ nullable: true })
    policyno: number;
    
    @Column({ nullable: true })
    insurancecompany: string;


    @ManyToOne(() => patient, patient => patient.insurance)
    patients: patient;  


    @OneToMany(() => billingdetails, billingdetails => billingdetails.insurances)
    billing: billingdetails[]; 


  
  

  }
  