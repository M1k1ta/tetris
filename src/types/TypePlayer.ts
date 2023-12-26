import { TypePos } from './TypePos';
import { TypeTetrominoKey } from './TypeTetrominoKey';

export interface TypePlayer {
  pos: TypePos;
  tetromino: TypeTetrominoKey[][];
  collided: boolean;
}
