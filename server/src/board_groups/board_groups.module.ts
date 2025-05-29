import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BoardGroupsController } from './board_groups.controller';
import { BoardGroup } from './board_groups.entity';
import { BoardGroupsService } from './board_groups.service';

@Module({
  imports: [TypeOrmModule.forFeature([BoardGroup])],
  controllers: [BoardGroupsController],
  providers: [BoardGroupsService],
})
export class BoardGroupsModule {}
