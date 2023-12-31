import { useState, useCallback } from 'react';

// Utils
import { TETROMINOS, randomTetromino } from '../utils/tetrominos';

// Types
import { TypePlayer } from '../types/TypePlayer';
import { STAGE_WIDTH, checkCollision } from '../utils/gameHelpers';
import { TypeStage } from '../types/TypeStage';
import { TypeTetrominoKey } from '../types/TypeTetrominoKey';

interface PlayerPos {
  x: number;
  y: number;
  collided?: boolean;
}

type updatePlayerPos = (playerPos: PlayerPos) => void;
type resetPlayer = () => void;
type playerRotate = (stage: TypeStage, dir: number) => void;
type PlayerHookResult = [TypePlayer, updatePlayerPos, resetPlayer, playerRotate, TypeTetrominoKey[][]];

export const usePlayer = (): PlayerHookResult => {
  const [player, setPlayer] = useState<TypePlayer>({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });
  const [nextTetromino, setNextTetromino] = useState<TypeTetrominoKey[][]>(randomTetromino().shape);

  const rotate = (matrix: TypeStage, dir: number) => {
    const rotatedTetro = matrix.map((_, index) => (
      matrix.map(col => col[index])
    ));

    if (dir > 0) {
      return rotatedTetro.map(row => row.reverse());
    }

    return rotatedTetro.reverse();
  };

  const playerRotate = (stage: TypeStage, dir: number) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;

    while(checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset =-(offset + (offset > 0 ? 1 : -1));

      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }: PlayerPos) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
      collided: collided ? collided : prev.collided,
    }));
  };

  const convertToSquareShape = (originalShape: TypeTetrominoKey[][]) => {
    const numRows = 6;
    const squareShape = Array.from({ length: numRows }, () =>
      Array.from({ length: numRows }).fill(0)
    );
  
    for (let i = 0; i < originalShape.length; i++) {
      for (let j = 0; j < originalShape[i].length; j++) {
        const rowIndex = Math.floor((numRows - originalShape.length) / 2) + i;
        const colIndex = Math.floor((numRows - originalShape[i].length) / 2) + j;
        squareShape[rowIndex][colIndex] = originalShape[i][j];
      }
    }
  
    return squareShape as TypeTetrominoKey[][];
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: nextTetromino,
      collided: false,
    });
    setNextTetromino(randomTetromino().shape);
  }, [nextTetromino])

  return [player, updatePlayerPos, resetPlayer, playerRotate, convertToSquareShape(nextTetromino)];
};
