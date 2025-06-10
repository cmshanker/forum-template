import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateMemberDto, UpdateMemberDto } from './dto/members.dto';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
  constructor(private membersService: MembersService) {}

  @Post()
  async create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.membersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateMemberDto: UpdateMemberDto) {
    console.log(updateMemberDto);
    return `This action updates a #${id} member`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.membersService.remove(id);
  }
}
