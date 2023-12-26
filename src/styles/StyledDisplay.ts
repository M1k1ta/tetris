import styled from 'styled-components';

interface Props {
  gameOver: boolean;
}

export const StyledDisplay = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 15px;
  border: 4px solid #333;
  min-height: 30ps;
  width: 100%;
  border-radius: 15px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background-color: #000;
  font-family: PixelifySans, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;

  @media (max-width: 700px) {
    font-size: 0.6rem;
  }
`;
