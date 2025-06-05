import { AbstractEntity } from 'src/abtract.entity';
import { Board } from 'src/boards/entities/boards.entity';
import { Entity, OneToMany } from 'typeorm';

@Entity()
export class BoardGroup extends AbstractEntity<BoardGroup> {
  @OneToMany(() => Board, (board) => board.boardGroup)
  boards: Board[];
}
