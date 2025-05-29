import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BoardGroup } from './board_groups.entity';

@Injectable()
export class BoardGroupsService {
  constructor(
    @InjectRepository(BoardGroup)
    private boardGroupsRepository: Repository<BoardGroup>,
  ) {}

  create(boardGroup: BoardGroup) {
    return this.boardGroupsRepository.create(boardGroup);
  }

  findAll(): Promise<BoardGroup[]> {
    return this.boardGroupsRepository.find();
  }

  findOne(id: number): Promise<BoardGroup | null> {
    return this.boardGroupsRepository.findOneBy({ id });
  }
  async remove(id: number): Promise<void> {
    await this.boardGroupsRepository.delete(id);
  }
}
