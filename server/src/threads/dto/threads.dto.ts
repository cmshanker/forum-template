import { CreateBoardDto } from 'src/boards/dto/boards.dto';

export class CreateThreadDto {
  name: string;
  createdBy: number;
  lastPostBy: number;
  boards: CreateBoardDto[];
}

export class UpdateThreadDto {
  name?: string;
  lastPostedIn: Date;
  lastPostBy: number;
}
