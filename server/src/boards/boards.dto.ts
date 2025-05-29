export class CreateBoardDto {
  id: number;
  name: string;
  boardGroupId: number;
  parentId?: number;
}

export class UpdateBoardDto {
  name: string;
}
