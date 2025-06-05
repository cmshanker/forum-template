import { CreateBoardGroupDto } from 'src/boards/dto/board_groups.dto';

export class CreateBoardDto {
  name: string;
  boardGroup: CreateBoardGroupDto;
}

export class UpdateBoardDto {
  name: string;
}
