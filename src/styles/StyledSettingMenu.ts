import styled from 'styled-components';

interface Props {
}

export const StyledSettingMenu = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: #222a;

  @media (max-width: 800px) {
    gap: 10px;
  }
`;
