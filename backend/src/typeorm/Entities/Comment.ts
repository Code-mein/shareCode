import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Capture } from './Capture';

@Entity({ name: 'comment' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @ManyToOne(() => Capture, (capture) => capture.id)
  capture: Capture;
}
