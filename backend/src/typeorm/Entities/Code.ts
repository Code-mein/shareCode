import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Capture } from "./Capture";

@Entity({name: 'code'})
export class Code{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  timeStamp: Date;

  @OneToMany(() => Capture, capture => capture.code)
  capture: Capture[];
}
