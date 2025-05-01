export class CreatePostDto {
  id: number;
  content: string;
  createdAt: Date;
  createdBy: number;
  lastEditedAt?: Date;
  threadId: number;
}

export class UpdatePostDto {
  content: string;
  lastEditedAt: Date;
}
