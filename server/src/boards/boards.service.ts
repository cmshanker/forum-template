import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { Board } from './entities/boards.entity';
import { CreateBoardDto } from './dto/boards.dto';
import { BoardGroup } from './entities/board_groups.entity';
import { CreateBoardGroupDto } from './dto/board_groups.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardsRepository: Repository<Board>,
    private readonly entityManager: EntityManager,
  ) {}

  private readonly logger = new Logger(BoardsService.name);

  async createBoard(createBoardDto: CreateBoardDto) {
    const board = new Board({ ...createBoardDto });
    await this.entityManager.save(board);
  }

  async createBoardGroup(createBoardGroupDto: CreateBoardGroupDto) {
    const boards =
      createBoardGroupDto.boards?.map((cbd) => new Board({ ...cbd })) ?? [];
    const boardGroup = new BoardGroup({ ...createBoardGroupDto, boards });
    await this.entityManager.save(boardGroup);
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
