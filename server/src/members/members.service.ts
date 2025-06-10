import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Member } from './entity/members.entity';
import { CreateMemberDto } from './dto/members.dto';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private membersRepository: Repository<Member>,
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    const member = new Member({ ...createMemberDto, threads: [], posts: [] });
    await this.membersRepository.save(member);
  }

  findAll(): Promise<Member[]> {
    return this.membersRepository.find();
  }

  findOne(id: number): Promise<Member | null> {
    return this.membersRepository.findOneBy({ id });
  }
  async remove(id: number): Promise<void> {
    await this.membersRepository.delete(id);
  }
}
