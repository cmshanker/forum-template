import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { Board } from './boards/boards.entity';
import { BoardsModule } from './boards/boards.module';
import { Member } from './members/members.entity';
import { MembersModule } from './members/members.module';
import { Post } from './posts/posts.entity';
import { PostsModule } from './posts/posts.module';
import { Thread } from './threads/threads.entity';
import { ThreadsModule } from './threads/threads.module';
import { AppLoggerMiddleware } from './utils/logger';

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
      entities: [Board, Post, Thread, Member],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
