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

@Entity('DoctorDuty')
export class DoctorDuty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  doctorId: number;

  @Column()
  dutyDate: Date;

  @Column({ type: 'time' })
  startTime: Date;

  @Column({ type: 'time' })
  endTime: Date;

  @Column()
  appointmentDuration: number;
  
  @Column()
  slot1: Boolean;
  @Column()
  slot2: Boolean;
  @Column()
  slot3: Boolean;
  @Column()
  slot4: Boolean;

  @Column()
  slot5: Boolean;
  @Column()
  slot6: Boolean;
  @Column()
  slot7: Boolean;



}