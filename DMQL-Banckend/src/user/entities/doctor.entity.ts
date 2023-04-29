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

  import { User } from '../entities/users.entity';
  import { Appointment } from './appointment.entity';
  import {patienthistory} from '../entities/patienthistory.entity'

  
  @Entity('doctor')
  export class Doctor {
    @PrimaryGeneratedColumn()
    id: number;
  

  
    @Column({ nullable: true })
    firstname: string;
  
    @Column({ nullable: true })
    lastname: string;
  
  
    @Column({ nullable: true })
    sex: string;
  
    @Column({ nullable: true })
    speciality: string;
  
    @Column({ nullable: true })
    age: number;
  
    @Unique('username_d', ['username'])
    @Column({ length: 200 })
    username: string;
  
    @Column({ nullable: true })
    isAccountDisabled: boolean;
  
    @Unique('email_d', ['email'])
    @Column({ length: 200, nullable: true })
    email: string;
  
  
    @CreateDateColumn({ name: 'createdAt', nullable: true })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updatedAt', nullable: true })
    updatedAt: Date;

    @ManyToOne(() => User, user => user.doctors)
    user: User;

    @OneToMany(() => Appointment, Appointment => Appointment.doctor)
    appointment: Appointment[]; 

    @OneToMany(() => patienthistory, patienthistory => patienthistory.doctors)
    patientlog: patienthistory[]; 
  
  }
  