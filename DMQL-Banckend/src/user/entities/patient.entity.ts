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

  @Entity('patient')
  export class patient {
    @PrimaryGeneratedColumn()
    id: number;
  

    @Column({ nullable: true })
    firstname: string;
  
    @Column({ nullable: true })
    lastname: string;
  
    @Column({ nullable: true })
    sex: string;
  
    @Column({ nullable: true })
    age: number;
  
    @Column({ nullable: true })
    phonenumber: number;
  
    @Column({ nullable: true })
    emergencycontact: number;
  
  
    @Column({ nullable: true })
    isAccountDisabled: boolean;
  
    @Unique('email', ['email'])
    @Column({ length: 200, nullable: true })
    email: string;
  
  
    @CreateDateColumn({ name: 'createdAt', nullable: true })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updatedAt', nullable: true })
    updatedAt: Date;
   
    @ManyToOne(() => User, user => user.patients)
    user: User;

    @OneToMany(() => Appointment, Appointment => Appointment.patients)
    appointment: Appointment[]; 
  }
  