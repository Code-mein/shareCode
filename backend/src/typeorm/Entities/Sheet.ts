import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Code } from './Code';

@Entity({ name: 'sheet' })
export class Sheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  url: string;

  @OneToOne(() => Code)
  @JoinColumn()
  code: Code;

  @CreateDateColumn()
  created_at: Date; // Creation date
}
