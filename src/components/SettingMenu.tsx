// Styled Components
import { StyledSettingMenu } from '../styles/StyledSettingMenu';
import { StyledTextButton } from '../styles/StyledTextButton';
import { TypeDropSpeed } from '../types/TypeDropSpeed';
import { dropSpeeds } from '../utils/dropSpeed';

interface Props {
  dropSpeed: TypeDropSpeed;
  onDropSpeed: (dropSpeed: TypeDropSpeed) => void;
  closeSetting: () => void;
}

export const SettingMenu: React.FC<Props> = ({ dropSpeed, onDropSpeed, closeSetting }) => {
  const easy = () => {
    onDropSpeed(dropSpeeds.easy);
    closeSetting();
  };

  const normal = () => {
    onDropSpeed(dropSpeeds.normal);
    closeSetting();
  };

  const hard = () => {
    onDropSpeed(dropSpeeds.hard);
    closeSetting();
  };

  return (
  <StyledSettingMenu onClick={closeSetting}>
    <StyledTextButton
      isActive={dropSpeed.name === dropSpeeds.easy.name}
      type='button'
      onClick={easy}
    >
      Easy
    </StyledTextButton>
    
    <StyledTextButton
      isActive={dropSpeed.name === dropSpeeds.normal.name}
      type='button'
      onClick={normal}
    >
      Normal
    </StyledTextButton>

    <StyledTextButton
      isActive={dropSpeed.name === dropSpeeds.hard.name}
      type='button'
      onClick={hard}
    >
      Hard
    </StyledTextButton>
  </StyledSettingMenu>
)};
