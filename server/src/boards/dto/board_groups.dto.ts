import { CreateBoardDto } from './boards.dto';

export class CreateBoardGroupDto {
  name: string;
  boards?: CreateBoardDto[];
}

export class UpdateBoardGroupDto {
  name: string;
}
