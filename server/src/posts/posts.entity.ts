import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Thread } from 'src/threads/threads.entity';
import { Member } from 'src/members/members.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'content' })
  content: string;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @ManyToOne(() => Member, (member) => member.id)
  @JoinColumn({ name: 'created_by' })
  createdBy: number;

  @Column({ name: 'last_edited_at' })
  lastEditedAt?: Date;

  @ManyToOne(() => Thread, (thread) => thread.id)
  @JoinColumn({ name: 'thread_id' })
  threadId: number;
}
