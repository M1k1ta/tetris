import React from 'react';

// Styled Components
import { StyledStage } from '../styles/StyledStage';

// Components
import { Cell } from './Cell';

// Types
import { TypeStage } from '../types/TypeStage';

interface Props {
  stage: TypeStage;
  onClick: () => void;
  children?: any;
};

export const Stage: React.FC<Props> = ({ stage, children, onClick }) => (
  <StyledStage width={stage[0].length} height={stage.length} onClick={onClick}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    {children}
  </StyledStage>
);
