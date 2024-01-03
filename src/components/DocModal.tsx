import { StyledDocModal, StyledTd, StyledTdCenter } from '../styles/StyledDocModal';

interface Props {
  isActive: boolean;
  setIsActive: () => void;
}

interface TrProps {
  firstKey: string;
  secondKey?: string;
  done: string;
}

const DocTr: React.FC<TrProps> = ({ firstKey, secondKey = '', done }) => (
  <tr>
    <StyledTdCenter>{firstKey}</StyledTdCenter>
    <td>{(secondKey) ? '/' : ''}</td>
    <StyledTdCenter>{secondKey}</StyledTdCenter>
    <StyledTd>-</StyledTd>
    <td>{done}</td>
  </tr>
);

export const DocModal: React.FC<Props> = ({ isActive, setIsActive }) => (
  <StyledDocModal isActive={isActive} onClick={() => setIsActive()}>
    <table>
      <tbody>
        <DocTr
          firstKey='W'
          secondKey='&#8593;'
          done='rotate'
        />
        <DocTr
          firstKey='A'
          secondKey='&#8592;'
          done='left'
        />
        <DocTr
          firstKey='S'
          secondKey='&#8595;'
          done='drop'
        />
        <DocTr
          firstKey='D'
          secondKey='&#8594;'
          done='right'
        />
        <DocTr
          firstKey='P'
          done='stop / continue'
        />
      </tbody>
    </table>
  </StyledDocModal>
);
