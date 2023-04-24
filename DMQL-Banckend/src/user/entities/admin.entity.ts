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

  @Entity('admin')
  export class Admin {
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
  
  
    @Column({ nullable: true })
    isAccountDisabled: boolean;
  
    @Unique('email', ['email'])
    @Column({ length: 200, nullable: true })
    email: string;
  
  
    @CreateDateColumn({ name: 'createdAt', nullable: true })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updatedAt', nullable: true })
    updatedAt: Date;

    @ManyToOne(() => User, user => user.admins)
    user: User;
  }
  