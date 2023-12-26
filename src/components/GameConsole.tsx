// Imgs
import rotateArrow from '../img/rotate-right.png';
import leftArrow from '../img/move-left.png';
import rightArrow from '../img/move-right.png';
import downArrow from '../img/move-down.png';

// Styled Components
import { StyledConsoleButton, Empty, Icon } from '../styles/StyledConsoleButton';
import { StyledGameConsole } from '../styles/StyledGameConsole';
import React from 'react';

interface Props {
  left: () => void;
  rotate: () => void;
  right: () => void;
  down: () => void;
}

export const GameConsole: React.FC<Props> = ({ left, rotate, right, down}) => (
  <StyledGameConsole height={2} width={3}>
    <StyledConsoleButton type='button' onClick={left}>
      <Icon src={leftArrow} alt='move left' />
    </StyledConsoleButton>

    <StyledConsoleButton type='button' onClick={rotate}>
      <Icon src={rotateArrow} alt='rotate right' />
    </StyledConsoleButton>

    <StyledConsoleButton type='button' onClick={right}>
      <Icon src={rightArrow} alt='move right' />
    </StyledConsoleButton>

    <Empty />

    <StyledConsoleButton type='button' onClick={down}>
      <Icon src={downArrow} alt='move down' />
    </StyledConsoleButton>

    <Empty />
  </StyledGameConsole>
);
