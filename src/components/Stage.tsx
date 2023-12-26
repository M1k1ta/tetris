import React from 'react';

// Styled Components
import { StyledStage } from '../styles/StyledStage';

// Components
import { Cell } from './Cell';

// Types
import { TypeStage } from '../types/TypeStage';

interface Props {
  stage: TypeStage;
};

export const Stage: React.FC<Props> = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);
