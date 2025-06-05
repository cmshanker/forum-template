import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Board } from './entities/boards.entity';
import { CreateBoardDto } from './dto/boards.dto';
import { BoardGroup } from './entities/board_groups.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
  ) {}

  private readonly logger = new Logger(BoardsService.name);

  async create(createBoardDto: CreateBoardDto) {
    const boardGroup = new BoardGroup({ name: createBoardDto.boardGroup.name });
    this.logger.log('---------------------------------');
    this.logger.log(boardGroup);
    const board = new Board({
      ...createBoardDto,
      boardGroup,
    });
    this.logger.log('---------------------------------');
    this.logger.log(board);
    await this.boardsRepository.save(board);
  }

  findAll(): Promise<Board[]> {
    const asdf = this.boardsRepository.find();
    void asdf.then((boards) => {
      this.logger.log(boards);
    });
    return asdf;
  }

  findOne(id: number): Promise<Board | null> {
    return this.boardsRepository.findOneBy({ id });
  }
  async remove(id: number): Promise<void> {
    await this.boardsRepository.delete(id);
  }
}
