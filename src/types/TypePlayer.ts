import { TypeTetrominoKey } from './TypeTetrominoKey';

export interface TypePlayer {
  pos: { x: number, y: number };
  tetromino: TypeTetrominoKey[][];
  collided: boolean;
}
