import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Member } from './members.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private membersRepository: Repository<Member>,
  ) {}

  create(member: Member) {
    return this.membersRepository.create(member);
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
