import { BoardGroup } from 'src/boards/entities/board_groups.entity';
import { Thread } from 'src/threads/entity/threads.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => BoardGroup, (boardGroup) => boardGroup.boards)
  boardGroup: BoardGroup;

  @ManyToMany(() => Thread, (thread) => thread.boards, { cascade: true })
  threads: Thread[];

  constructor(board: Partial<Board>) {
    Object.assign(this, board);
  }
}
