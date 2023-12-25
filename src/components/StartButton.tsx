import React from 'react';

// Styled Components
import { StyledStartButton } from '../styles/StyledStartButton';

interface Props {
  callback: any;
};

export const StartButton: React.FC<Props> = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);
