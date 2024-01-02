import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

export const StyledNextTetromino = styled.div<Props>`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(80px / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  gap: 1px;
  width: 80px;
  background-color: #1118;
  margin: 0 10px 20px;
`;
