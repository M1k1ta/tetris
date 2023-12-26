import styled from 'styled-components';

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 15px;
  min-height: 30px;
  width: 100%;
  border-radius: 15px;
  border: none;
  background: #555;
  font-family: PixelifySans, Arial, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: background-color 400ms;

  &:hover {
    background-color: #999;
  }

  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;
