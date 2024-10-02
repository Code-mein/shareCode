import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Capture } from './Capture';

@Entity({ name: 'code' })
export class Code {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  code: string;

  @CreateDateColumn()
  timeStamp: Date;

  @OneToMany(() => Capture, (capture) => capture.code)
  capture: Capture[];
}
