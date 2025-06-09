import { Board } from 'src/boards/entities/boards.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BoardGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Board, (board) => board.boardGroup, { cascade: true })
  boards: Board[];

  constructor(entity: Partial<BoardGroup>) {
    Object.assign(this, entity);
  }
}
