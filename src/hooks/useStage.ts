import { Dispatch, SetStateAction, useState, useEffect } from 'react';

// Utils
import { createStage } from '../utils/gameHelpers';

// Types
import { TypeCell } from '../types/TypeCell';
import { TypePlayer } from '../types/TypePlayer';

export const useStage = (player: TypePlayer, resetPlayer: () => void): [TypeCell[][], Dispatch<SetStateAction<TypeCell[][]>>] => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage: TypeCell[][]) => {
      const newStage: TypeCell[][] = prevStage.map(row => (
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      ));

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`
            ];
          }
        });
      });

      return newStage;
    }

    setStage(prev => updateStage(prev));
  }, [player])

  return [stage, setStage];
};
