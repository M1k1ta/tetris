import { useState, useCallback } from 'react';

// Utils
import { TETROMINOS, randomTetromino } from '../utils/tetrominos';

// Types
import { TypePlayer } from '../types/TypePlayer';
import { STAGE_WIDTH } from '../utils/gameHelpers';

interface PlayerPos {
  x: number;
  y: number;
  collided?: boolean;
}

type updatePlayerPos = (playerPos: PlayerPos) => void;
type resetPlayer = () => void;

export const usePlayer = (): [TypePlayer, updatePlayerPos, resetPlayer] => {
  const [player, setPlayer] = useState<TypePlayer>({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }: PlayerPos) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
      collided: collided ? collided : prev.collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, [])

  return [player, updatePlayerPos, resetPlayer];
};
