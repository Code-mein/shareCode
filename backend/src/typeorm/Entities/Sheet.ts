import e from "express";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'sheet'})
export class Sheet{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  url: string;

  @OneToOne(() => Sheet)
  sheet: Sheet;

  @Column()
  timeStamp: Date;


}