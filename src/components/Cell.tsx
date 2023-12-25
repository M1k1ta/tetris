import React from 'react';

// Styled Components
import { StyledCell } from '../styles/StyledCell';

import { TETROMINOS } from '../utils/tetrominos';
import { TypeTetrominoKey } from '../types/TypeTetrominoKey';

interface Props {
  type: TypeTetrominoKey;
};

export const Cell: React.FC<Props> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);
