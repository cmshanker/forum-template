import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Board } from './boards.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
  ) {}

  create(board: Board) {
    return this.boardsRepository.create(board);
  }

  findAll(): Promise<Board[]> {
    return this.boardsRepository.find();
  }

  findOne(id: number): Promise<Board | null> {
    return this.boardsRepository.findOneBy({ id });
  }
  async remove(id: number): Promise<void> {
    await this.boardsRepository.delete(id);
  }
}
