// Styled Components
import { StyledMenuButton } from '../styles/StyledMenuButton';
import { StyledTetrisMenu } from '../styles/StyledTetrisMenu';
import { StyledIcon } from '../styles/StyledIcon';

// Imgs
import startButton from '../img/play.png';
import restartButton from '../img/reload.png';
import setting from '../img/setting.png';

interface Props {
  gameStart: boolean;
  gameStop: boolean;
  gameOver: boolean;
  startGame: () => void;
  continueGame: () => void;
  onIsSetting: () => void;
}

export const TetrisMenu: React.FC<Props> = ({ gameStart, gameStop, gameOver, startGame, continueGame, onIsSetting }) => (
  <StyledTetrisMenu>
    {!gameOver && (
      <StyledMenuButton type='button' onClick={(!gameStop) ? startGame : continueGame}>
        <StyledIcon src={startButton} alt='start button' />
      </StyledMenuButton>
    )}

    {!gameStart && (
      <StyledMenuButton type='button' onClick={startGame}>
        <StyledIcon src={restartButton} alt='restart button' />
      </StyledMenuButton>
    )}

    <StyledMenuButton type='button' onClick={onIsSetting}>
      <StyledIcon src={setting} alt='setting button' />
    </StyledMenuButton>
  </StyledTetrisMenu>
);
