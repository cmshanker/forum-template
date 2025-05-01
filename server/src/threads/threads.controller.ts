import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateThreadDto, UpdateThreadDto } from './threads.dto';
import { ThreadsService } from './threads.service';

@Controller('threads')
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Post()
  create(@Body() createThreadDto: CreateThreadDto) {
    this.threadsService.create({
      id: createThreadDto.id,
      name: createThreadDto.name,
      createdAt: new Date(),
      createdBy: createThreadDto.createdBy,
      lastPostedIn: new Date(),
      lastPostBy: createThreadDto.createdBy,
      boardId: createThreadDto.boardId,
    });
  }

  @Get()
  findAll() {
    return this.threadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.threadsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateThreadDto: UpdateThreadDto) {
    console.log(updateThreadDto);
    return `This action updates a #${id} thread`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.threadsService.remove(id);
  }
}
