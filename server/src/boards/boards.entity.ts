import { BoardGroup } from 'src/board_groups/board_groups.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @ManyToOne(() => BoardGroup, (boardGroup) => boardGroup.id)
  @JoinColumn({ name: 'board_group_id' })
  boardGroupId: number;

  @ManyToOne(() => Board, (board) => board.id)
  @JoinColumn({ name: 'parent_id' })
  parentId?: number;
}
