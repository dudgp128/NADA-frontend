/** BottomButton 뱃지 발급시, 가장 아래에 위치한 'divide' 버튼 컴포넌트 */
import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const BottomButton = ({
  grayText,
  grayAct,
  actText,
  act,
  isDisabled,
}) => {
  return (
    <ButtonList>
      {grayText && (
        <GrayBtn onClick={(e) => grayAct(e)}>
          <div className="text">{grayText}</div>
        </GrayBtn>
      )}
      {actText && (
        <Act onClick={(e) => act(e)} disabled={isDisabled}>
          <div className="text">{actText}</div>
        </Act>
      )}
    </ButtonList>
  );
};

export default BottomButton;

export const ButtonList = styled.div`
  display: flex;
  gap: 8px;
  text-align: center;
  width: 100%;
  align-items: end;
  position: relative;
  bottom: 50px;

  & > div,
  button {
    height: fit-content;
    & > .text {
      ${applyFontStyles({ font: 'title-01' })}
    }
  }
`;

export const GrayBtn = styled.div`
  background: var(--myspec-gray-scalegray-100);
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 12px;

  & > .text {
    color: var(--myspec-gray-scalegray-900);
  }
`;

export const Act = styled.button`
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: var(--myspec-primaryblue-1);
  border: none;

  opacity: ${(props) => (props.disabled ? 0.3 : 1)};

  & > .text {
    color: var(--myspec-gray-scalegray-100) !important;
  }

  &.disabled {
    opacity: 0.3;
  }
`;
