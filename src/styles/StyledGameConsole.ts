import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

export const StyledGameConsole = styled.div<Props>`
  position: absolute;
  right: 40px;
  bottom: 80px;
  
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(200px / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  gap: 3px;
  width: 100%;
  max-width: calc(200px + 6px);
  background-color: #0000;

  @media (min-width: 700px) {
    display: none;
  }
`;
