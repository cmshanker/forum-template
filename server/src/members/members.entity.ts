import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'role' })
  role: string;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;
}
