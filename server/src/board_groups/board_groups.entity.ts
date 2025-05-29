import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BoardGroup {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;
}
