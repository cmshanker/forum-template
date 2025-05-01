import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Board } from 'src/boards/boards.entity';
import { User } from 'src/users/users.entity';

@Entity()
export class Thread {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: new Date() })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  createdBy: number;

  @Column()
  lastPostedIn: Date;

  @ManyToOne(() => User, (user) => user.id)
  lastPostBy: number;

  @ManyToOne(() => Board, (board) => board.id)
  boardId: number;
}
