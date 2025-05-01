import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { ThreadsModule } from './threads/threads.module';
import { PostsModule } from './posts/posts.module';
import { User } from './users/users.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    BoardsModule,
    ThreadsModule,
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'forum',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
