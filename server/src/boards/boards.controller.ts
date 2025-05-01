import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateBoardDto, UpdateBoardDto } from './boards.dto';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    this.boardsService.create({
      id: createBoardDto.id,
      name: createBoardDto.name,
      parentId: createBoardDto.parentId ?? undefined,
    });
  }

  @Get()
  findAll() {
    return this.boardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.boardsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateBoardDto: UpdateBoardDto) {
    console.log(updateBoardDto);
    return `This action updates a #${id} board`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.boardsService.remove(id);
  }
}
