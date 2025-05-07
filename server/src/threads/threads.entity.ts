import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Board } from 'src/boards/boards.entity';
import { Member } from 'src/members/members.entity';

@Entity()
export class Thread {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @ManyToOne(() => Member, (member) => member.id)
  @JoinColumn({ name: 'created_by' })
  createdBy: number;

  @Column({ name: 'last_posted_in' })
  lastPostedIn: Date;

  @ManyToOne(() => Member, (member) => member.id)
  @JoinColumn({ name: 'last_post_by' })
  lastPostBy: number;

  @ManyToOne(() => Board, (board) => board.id)
  @JoinColumn({ name: 'board_id' })
  boardId: number;
}
