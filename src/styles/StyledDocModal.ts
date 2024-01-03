import styled from 'styled-components';

interface Props {
  isActive: boolean;
}


export const StyledDocModal = styled.div<Props>`
  position: absolute;
  top: 50px;
  right: 0;
  transform: translateX(${props => props.isActive ? '0px' : '230px'});

  box-sizing: border-box;
  padding: 10px 20px;
  background-color: #111b;
  color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 245px;
  transition: transform 400ms;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const StyledTd = styled.td`
  padding: 0 20px;
`;

export const StyledTdCenter = styled.td`
  text-align: center;
`;
