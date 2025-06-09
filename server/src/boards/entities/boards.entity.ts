import { BoardGroup } from 'src/boards/entities/board_groups.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => BoardGroup, (boardGroup) => boardGroup.boards)
  boardGroup: BoardGroup;

  constructor(board: Partial<Board>) {
    Object.assign(this, board);
  }
}
