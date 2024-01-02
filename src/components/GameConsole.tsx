import React from 'react';

// Imgs
import rotateArrow from '../img/rotate-right.png';
import leftArrow from '../img/move-left.png';
import rightArrow from '../img/move-right.png';
import downArrow from '../img/move-down.png';

// Styled Components
import { Empty } from '../styles/StyledConsoleButton';
import { StyledGameConsole } from '../styles/StyledGameConsole';
import { ConsoleButton } from './ConsoleButton';
import { StyledIcon } from '../styles/StyledIcon';

interface Props {
  left: () => void;
  rotate: () => void;
  right: () => void;
  down: () => void;
}

export const GameConsole: React.FC<Props> = ({ left, rotate, right, down}) => (
  <StyledGameConsole
    height={2}
    width={3}
    onContextMenu={(event: React.MouseEvent) => {
      event.preventDefault();
   }}
  >
    <ConsoleButton callback={left}>
      <StyledIcon src={leftArrow} alt='move left' />
    </ConsoleButton>

    <ConsoleButton callback={rotate}>
      <StyledIcon src={rotateArrow} alt='rotate right' />
    </ConsoleButton>

    <ConsoleButton callback={right}>
      <StyledIcon src={rightArrow} alt='move right' />
    </ConsoleButton>

    <Empty />

    <ConsoleButton callback={down}>
      <StyledIcon src={downArrow} alt='move down' />
    </ConsoleButton>

    <Empty />
  </StyledGameConsole>
);
