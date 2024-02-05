import styled from 'styled-components';
import { ErrorMessage } from '../../styles/Survey';
import { WarningSvg } from '../../icon/WarningSvg';

const CautionBox = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 8px;
  height: 21px;
`;

const Caution = ({ error }) => {
  return (
    <CautionBox>
      {error && (
        <>
          <WarningSvg />
          <ErrorMessage>{error}</ErrorMessage>
        </>
      )}
    </CautionBox>
  );
};

export default Caution;
