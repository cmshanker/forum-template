import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { Board } from './boards/entities/boards.entity';
import { BoardsModule } from './boards/boards.module';
import { BoardGroup } from './boards/entities/board_groups.entity';
import { Member } from './members/members.entity';
import { MembersModule } from './members/members.module';
import { Post } from './posts/posts.entity';
import { PostsModule } from './posts/posts.module';
import { Thread } from './threads/threads.entity';
import { ThreadsModule } from './threads/threads.module';

@Module({
  imports: [
    AuthModule,
    MembersModule,
    BoardsModule,
    ThreadsModule,
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'forum',
      entities: [Board, BoardGroup, Post, Thread, Member],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
