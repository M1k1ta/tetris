import styled from 'styled-components';

interface Props {
  height: number;
  width: number;
}

export const StyledStage = styled.div<Props>`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  gap: 1px;
  border: 2px solid #333;
  width: 100%;
  min-width: 150px;
  max-width: 25vw;
  background-color: #1118;

  @media (max-width: 700px) {
    grid-template-rows: repeat(
      ${props => props.height},
      calc(150px / ${props => props.width})
    );
  }
`;
