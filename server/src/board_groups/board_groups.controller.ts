import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateBoardGroupDto, UpdateBoardGroupDto } from './board_groups.dto';
import { BoardGroupsService } from './board_groups.service';

@Controller('board_groups')
export class BoardGroupsController {
  constructor(private boardGroupsService: BoardGroupsService) {}

  @Post()
  create(@Body() createBoardGroupDto: CreateBoardGroupDto) {
    this.boardGroupsService.create({
      id: createBoardGroupDto.id,
      name: createBoardGroupDto.name,
    });
  }

  @Get()
  findAll() {
    return this.boardGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.boardGroupsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateBoardGroupDto: UpdateBoardGroupDto,
  ) {
    console.log(updateBoardGroupDto);
    return `This action updates a #${id} board group`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.boardGroupsService.remove(id);
  }
}
