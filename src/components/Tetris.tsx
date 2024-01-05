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
import { GameConsole } from './GameConsole';

// Utils
import { createStage, checkCollision } from '../utils/gameHelpers';
import { NextTetromino } from './NextTetromino';
import { TetrisMenu } from './TetrisMenu';
import { SettingMenu } from './SettingMenu';
import { dropSpeeds } from '../utils/dropSpeed';

export const Tetris: React.FC = () => {
  const [dropTime, setDropTime] = useState<number | null>(null);
  const [gameStart, setGameStart] = useState(true);
  const [gameStop, setGameStop] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isSetting, setIsSetting] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate, nextTetromino] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);
  const [dropSpeed, setDropSpeed] = useState(dropSpeeds.normal);

  const movePlayer = (dir: number) => {
    if (gameStart || gameStop || gameOver) {
      return;
    }

    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setStage(createStage());
    setDropTime(dropSpeed.speed(level));
    resetPlayer();
    setGameStart(false);
    setGameStop(false);
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const continueGame = () => {
    setDropTime(dropSpeed.speed(level));
    setGameStop(false);
    setGameOver(false);
  }

  const stopGame = () => {
    if (gameStart || gameStop || gameOver) {
      return;
    }

    setDropTime(null);
    setGameStop(true);
  }

  const drop = () => {
    if (gameStart || gameStop || gameOver) {
      return;
    }

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
    if (gameStop) {
      return;
    }

    if (!gameOver) {
      if (key === 'ArrowDown' || key.toLowerCase() === 's') {
        setDropTime(dropSpeed.speed(level));
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }: KeyboardEvent<HTMLDivElement>) => {
    if (gameStart || gameStop || gameOver) {
      return;
    }

    if (!gameOver) {
      if (keyCode === 37 || keyCode === 65) {
        movePlayer(-1);
      } else if (keyCode === 39 || keyCode === 68) {
        movePlayer(1);
      } else if (keyCode === 40 || keyCode === 83) {
        dropPlayer();
      } else if (keyCode === 38 || keyCode === 87) {
        playerRotate(stage, 1);
      }
    }
  };

  const keyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    move(event);

    if (event.keyCode === 80 && !gameStart && !gameOver) {
      (gameStop) ? continueGame() : stopGame();
    }
  };

  useInterval(() => {
    drop();
  }, dropTime)

  return (
    <StyledTetrisWrapper role='button' tabIndex={0} onKeyDown={keyDown} onKeyUp={keyUp}>
      <StyledTetris>
        <Stage stage={stage} onClick={stopGame}>
          {((gameStart || gameStop || gameOver) && !isSetting) && (
            <TetrisMenu
              gameStart={gameStart}
              gameStop={gameStop}
              gameOver={gameOver}
              startGame={startGame}
              continueGame={continueGame}
              onIsSetting={() => setIsSetting(true)}
            />
          )}

          {isSetting && (
            <SettingMenu
              dropSpeed={dropSpeed}
              onDropSpeed={setDropSpeed}
              closeSetting={() => setIsSetting(false)}
            />
          )}
        </Stage>

        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text='Game Over' />
          ) : (
            <div>
              <NextTetromino nextTetromino={nextTetromino} />
              <Display text={`Score ${score}`} />
              <Display text={`Rows ${rows}`} />
              <Display text={`Level ${level}`} />
            </div>
          )}
        </aside>
      </StyledTetris>

      <GameConsole
        left={() => movePlayer(-1)}
        rotate={() => {
          if (gameStart || gameStop || gameOver) {
            return;
          }
      
          playerRotate(stage, 1);
        }}
        right={() => movePlayer(1)}
        down={() => {
          dropPlayer();
          setDropTime(1000 / (level + 1));
        }}
      />
    </StyledTetrisWrapper>
  );
};
