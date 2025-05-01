export class CreateThreadDto {
  id: number;
  name: string;
  createdAt: Date;
  createdBy: number;
  lastPostedIn: Date;
  lastPostBy: number;
  boardId: number;
}

export class UpdateThreadDto {
  name?: string;
  lastPostedIn: Date;
  lastPostBy: number;
}
