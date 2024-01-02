// Styled Components
import { StyledNextTetromino } from '../styles/StyledNextTetromino';

// Types
import { TypeTetrominoKey } from '../types/TypeTetrominoKey'

// Components
import { Cell } from './Cell';

interface Props {
  nextTetromino: TypeTetrominoKey[][];
}

export const NextTetromino: React.FC<Props> = ({ nextTetromino }) => (
  <StyledNextTetromino height={nextTetromino.length} width={nextTetromino[0].length}>
    {nextTetromino.map(row => row.map((cell, x) => <Cell key={x} type={cell} />))}
  </StyledNextTetromino>
);
