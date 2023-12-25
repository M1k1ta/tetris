import React from 'react';

// Styled Components
import { StyledDisplay } from '../styles/StyledDisplay';

interface Props {
  text: string;
  gameOver: boolean;
};

export const Display: React.FC<Props> = ({ text, gameOver }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);
