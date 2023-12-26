import React, { KeyboardEvent, useState } from 'react';

// Styled Components
import { StyledTetris, StyledTetrisWrapper } from '../styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import { Stage } from './Stage';
import { Display } from './Display';
import { StartButton } from './StartButton';

// Utils
import { createStage, checkCollision } from '../utils/gameHelpers';
import { GameConsole } from './GameConsole';

export const Tetris: React.FC = () => {
  const [dropTime, setDropTime] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const movePlayer = (dir: number) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setStage(createStage());
    setDropTime(1000 / (level + 1));
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    if (rows > (level + 1) * 5) {
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1));
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }

      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (!gameOver) {
      if (key === 'ArrowDown' || key.toLowerCase() === 's') {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (!gameOver) {
      if (key === 'ArrowLeft' || key.toLowerCase() === 'a') {
        movePlayer(-1);
      } else if (key === 'ArrowRight' || key.toLowerCase() === 'd') {
        movePlayer(1);
      } else if (key === 'ArrowDown' || key.toLowerCase() === 's') {
        dropPlayer();
      } else if (key === 'ArrowUp' || key.toLowerCase() === 'w') {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime)

  return (
    <StyledTetrisWrapper role="button" tabIndex={0} onKeyDown={move} onKeyUp={keyUp}>
      <StyledTetris>
        <Stage stage={stage} />

        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score ${score}`} />
              <Display text={`Rows ${rows}`} />
              <Display text={`Level ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />

        </aside>

        <GameConsole
          left={() => movePlayer(-1)}
          rotate={() => playerRotate(stage, 1)}
          right={() => movePlayer(1)}
          down={() => {
            dropPlayer();
            setDropTime(1000 / (level + 1));
          }}
        />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};
