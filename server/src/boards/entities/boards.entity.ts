import { AbstractEntity } from 'src/abtract.entity';
import { BoardGroup } from 'src/boards/entities/board_groups.entity';
import { Entity, ManyToOne } from 'typeorm';

@Entity()
export class Board extends AbstractEntity<Board> {
  @ManyToOne(() => BoardGroup, (boardGroup) => boardGroup.boards, {
    cascade: true,
  })
  boardGroup: BoardGroup;
}
