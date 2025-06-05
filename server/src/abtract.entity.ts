import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class AbstractEntity<T> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}
