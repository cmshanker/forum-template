export class CreateBoardDto {
  id: number;
  name: string;
  parentId?: number;
}

export class UpdateBoardDto {
  name: string;
}
