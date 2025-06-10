import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Thread } from 'src/threads/entity/threads.entity';
import { Member } from 'src/members/entity/members.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ default: new Date() })
  createdAt: Date;

  @ManyToOne(() => Member, (member) => member.posts)
  createdBy: number;

  @Column()
  lastEditedAt?: Date;

  @ManyToOne(() => Thread, (thread) => thread.posts)
  thread: number;

  constructor(post: Partial<Post>) {
    Object.assign(this, post);
  }
}
