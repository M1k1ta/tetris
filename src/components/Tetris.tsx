import React, { KeyboardEvent, useState } from 'react';

// Styled Components
import { StyledTetris, StyledTetrisWrapper } from '../styles/StyledTetris';

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

// Components
import { Stage } from './Stage';
import { Display } from './Display';
import { StartButton } from './StartButton';

// Utils
import { createStage } from '../utils/gameHelpers';

export const Tetris: React.FC = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  const movePlayer = (dir: number) => {
    updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false })
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (!gameOver) {
      if (key === 'ArrowLeft') {
        movePlayer(-1);
      } else if (key === 'ArrowRight') {
        movePlayer(1);
      } else if (key === 'ArrowDown') {
        dropPlayer();
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex={0} onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />

        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" gameOver={gameOver} />
              <Display text="Rows" gameOver={gameOver} />
              <Display text="Level" gameOver={gameOver} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};
