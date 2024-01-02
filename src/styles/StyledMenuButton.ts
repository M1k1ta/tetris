import styled from 'styled-components';

export const StyledMenuButton = styled.button`
  box-sizing: border-box;
  padding: 10px;
  min-height: 40px;
  min-width: 40px;
  max-width: 5vw;
  max-height: 5vw; 
  border-radius: 50px;
  border: none;
  background-color: #ddd;
  outline: none;
  cursor: pointer;
  transition: background-color 400ms;

  &:hover {
    background-color: #999;
  }
`;
