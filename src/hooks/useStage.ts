import { Dispatch, SetStateAction, useState, useEffect } from 'react';

// Utils
import { createStage } from '../utils/gameHelpers';

// Types
import { TypePlayer } from '../types/TypePlayer';
import { TypeStage } from '../types/TypeStage';

type StageHookResult = [TypeStage, Dispatch<SetStateAction<TypeStage>>, number];

export const useStage = (player: TypePlayer, resetPlayer: () => void): StageHookResult => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowCleared] = useState(0);

  useEffect(() => {
    setRowCleared(0);

    const sweepRows = (newStage: TypeStage) => (
      newStage.reduce((ack: TypeStage, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowCleared(prev => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack;
        }
        ack.push(row);

        return ack;
      }, [])
    );

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
        return sweepRows(newStage);
      }

      return newStage;
    }

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer])

  return [stage, setStage, rowsCleared];
};
