import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Code } from "./Code";
import { Comment } from "./Comment";

@Entity({name: 'capture'})
export class Capture{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Code, code => code.id)
  code: Code;

  @Column()
  timeStamp: Date;

  @OneToMany(() => Comment, comment => comment.capture)
  comment: Comment[];
}