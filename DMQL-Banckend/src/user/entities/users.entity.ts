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
} from 'typeorm';
import { patient } from './patient.entity';
import { Doctor } from './doctor.entity';
import { Admin } from './admin.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Unique('username_u', ['username'])
  @Column({ length: 200 })
  username: string;

  @Column('simple-array', { nullable: true })
  roles: string[];

  @Column({ nullable: true })
  isAccountDisabled: boolean;

  @Unique('email_u', ['email'])
  @Column({ length: 200, nullable: true })
  email: string;

  @CreateDateColumn({ name: 'createdAt', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', nullable: true })
  updatedAt: Date;

  @OneToMany(() => patient, patient => patient.user)
  patients: patient[]; 


  @OneToMany(() => Doctor, Doctor => Doctor.user)
  doctors: Doctor[]; 

  @OneToMany(() => Admin, Admin => Admin.user)
  admins: Admin[]; 

  
}
