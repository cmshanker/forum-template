import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Post } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  create(post: Post) {
    return this.postsRepository.create(post);
  }

  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  findOne(id: number): Promise<Post | null> {
    return this.postsRepository.findOneBy({ id });
  }
  async remove(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }
}
