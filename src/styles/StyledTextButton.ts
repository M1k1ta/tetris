import styled from 'styled-components';

interface Props {
  isActive?: boolean;
}

export const StyledTextButton = styled.button<Props>`
  box-sizing: border-box;
  padding: 10px;
  width: 60%;
  border-radius: 50px;
  border: none;
  background-color: ${props => (props.isActive ? '#3d3' : '#ddd')};
  outline: none;
  font-family: PixelifySans, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 400ms;

  &:hover {
    background-color: ${props => (props.isActive ? '#3d3' : '#999')};
  }
`;
