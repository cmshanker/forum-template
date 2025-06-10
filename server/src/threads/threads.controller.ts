import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateThreadDto, UpdateThreadDto } from './dto/threads.dto';
import { ThreadsService } from './threads.service';

@Controller('threads')
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Post()
  async create(@Body() createThreadDto: CreateThreadDto) {
    return this.threadsService.create(createThreadDto);
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
