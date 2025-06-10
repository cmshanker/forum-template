import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from 'typeorm';

import { Board } from 'src/boards/entities/boards.entity';
import { Member } from 'src/members/entity/members.entity';
import { Post } from 'src/posts/entity/posts.entity';

@Entity()
export class Thread {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: new Date() })
  createdAt: Date;

  @ManyToOne(() => Member, (member) => member.threads)
  createdBy: number;

  @OneToMany(() => Post, (post) => post.thread)
  posts: Post[];

  @ManyToMany(() => Board, (board) => board.threads)
  boards: Board[];

  constructor(thread: Partial<Thread>) {
    Object.assign(this, thread);
  }
}
