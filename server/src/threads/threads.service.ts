import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Thread } from './threads.entity';

@Injectable()
export class ThreadsService {
  constructor(
    @InjectRepository(Thread)
    private threadsRepository: Repository<Thread>,
  ) {}

  create(thread: Thread) {
    return this.threadsRepository.create(thread);
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
