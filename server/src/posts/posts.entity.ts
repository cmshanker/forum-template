import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Thread } from 'src/threads/threads.entity';
import { User } from 'src/users/users.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ default: new Date() })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  createdBy: number;

  @Column()
  lastEditedAt?: Date;

  @ManyToOne(() => Thread, (thread) => thread.id)
  threadId: number;
}
