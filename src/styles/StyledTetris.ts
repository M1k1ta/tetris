import styled from 'styled-components';

// Img
import bgImage from '../img/background-img.webp';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    display: block;
    width: 100%;
    max-width: 200px;
    padding: 0 20px;
  }
`;
