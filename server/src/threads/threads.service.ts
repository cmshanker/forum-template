import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { Thread } from './entity/threads.entity';
import { CreateThreadDto } from './dto/threads.dto';
import { Board } from 'src/boards/entities/boards.entity';

@Injectable()
export class ThreadsService {
  constructor(
    @InjectRepository(Thread)
    private threadsRepository: Repository<Thread>,
    private entityManager: EntityManager,
  ) {}

  async create(createThreadDto: CreateThreadDto) {
    const boards = createThreadDto.boards.map((cbd) => new Board({ ...cbd }));
    const thread = new Thread({ ...createThreadDto, boards });
    await this.entityManager.save(thread);
  }

  findAll(): Promise<Thread[]> {
    return this.threadsRepository.find();
  }

  findOne(id: number): Promise<Thread | null> {
    return this.threadsRepository.findOneBy({ id });
  }
  async remove(id: number): Promise<void> {
    await this.threadsRepository.delete(id);
  }
}
