import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';

import { CreateBoardDto, UpdateBoardDto } from './dto/boards.dto';
import { BoardsService } from './boards.service';
import { CreateBoardGroupDto } from './dto/board_groups.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
  private readonly logger = new Logger(BoardsController.name);

  @Post()
  async createBoard(@Body() createBoardDto: CreateBoardDto) {
    this.logger.log(createBoardDto);
    return this.boardsService.createBoard(createBoardDto);
  }

  @Post('/group')
  async createBoardGroup(@Body() createBoardGroupDto: CreateBoardGroupDto) {
    this.logger.log(createBoardGroupDto);
    return this.boardsService.createBoardGroup(createBoardGroupDto);
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
