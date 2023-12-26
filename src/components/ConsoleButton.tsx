// Styled Components
import { StyledConsoleButton } from '../styles/StyledConsoleButton';

// Custom Hooks
import { useLongPress } from '../hooks/useLongPress';

interface Props {
  callback: () => void;
  children: any;
}

export const ConsoleButton: React.FC<Props> = ({ callback, children }) => {
  const longPressEvent = useLongPress(callback, 100);

  return (
    <StyledConsoleButton
      type='button'
      {...longPressEvent}
      onClick={callback}
    >
      {children}
    </StyledConsoleButton>
  );
};
