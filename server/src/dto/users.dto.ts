export class CreateUserDto {
  name: string;
  role: string;
}

export class UpdateUserDto {
  name: string;
}

export class ListAllUsers {
  limit: number;
}
