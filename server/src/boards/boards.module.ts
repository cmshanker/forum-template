import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BoardsController } from './boards.controller';
import { Board } from './entities/boards.entity';
import { BoardsService } from './boards.service';
import { BoardGroup } from 'src/boards/entities/board_groups.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board, BoardGroup])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
