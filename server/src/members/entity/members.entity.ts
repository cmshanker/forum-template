import { Post } from 'src/posts/entity/posts.entity';
import { Thread } from 'src/threads/entity/threads.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  role: string;

  @Column({ default: new Date() })
  createdAt: Date;

  @OneToMany(() => Thread, (thread) => thread.createdBy)
  threads: Thread[];

  @OneToMany(() => Post, (post) => post.createdBy)
  posts: Post[];

  constructor(member: Partial<Member>) {
    Object.assign(this, member);
  }
}
