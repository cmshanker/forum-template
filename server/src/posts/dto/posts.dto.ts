export class CreatePostDto {
  content: string;
  createdBy: number;
  threadId: number;
}

export class UpdatePostDto {
  content: string;
  lastEditedAt: Date;
}
