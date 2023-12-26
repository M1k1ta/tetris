import { Dispatch, SetStateAction, useState, useEffect } from 'react';

// Utils
import { createStage } from '../utils/gameHelpers';

// Types
import { TypePlayer } from '../types/TypePlayer';
import { TypeStage } from '../types/TypeStage';

export const useStage = (player: TypePlayer, resetPlayer: () => void): [TypeStage, Dispatch<SetStateAction<TypeStage>>] => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage: TypeStage) => {
      const newStage: TypeStage = prevStage.map(row => (
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

      if (player.collided) {
        resetPlayer();
      }

      return newStage;
    }

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer])

  return [stage, setStage];
};
