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
    Timestamp,
    Unique,
    UpdateDateColumn,
  } from 'typeorm';

@Entity('querybook')
export class QueryBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  type: string;

  @Column()
  queries: string;






}