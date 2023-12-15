/** ModalButtonDiv 모달 가장 아래에 위치한 'divide' 버튼 컴포넌트 */
import useModal from './useModal';
import styled from 'styled-components';
import classNames from 'classnames';
import { applyFontStyles } from '../../../styles/fontStyle';

export const ModalButtonDiv = ({ cancelText, actText, act, isRed }) => {
  const { closeModal } = useModal();

  const ButtonList = {
    alignItems: 'flex-start',
    display: 'flex',
    flex: '0 0 auto',
    gap: '8px',
    height: '48px',
    position: 'relative',
    width: '264px',
    textAlign: 'center',
  };

  return (
    <div style={ButtonList}>
      <Cancel onClick={() => closeModal()} $isColor={Boolean(cancelText)}>
        <div className="text">{cancelText || '취소'}</div>
      </Cancel>
      {actText && (
        <Act className={classNames('act', { isRed })} onClick={() => act()}>
          <div className="text">{actText}</div>
        </Act>
      )}
    </div>
  );
};

export default ModalButtonDiv;

const Cancel = styled.div`
  background: ${(props) =>
    props.$isColor
      ? 'var(--myspec-primaryblue-1)'
      : 'var(--myspec-gray-scalegray-100)'};
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 12px;

  & > .text {
    ${(props) => {
      return applyFontStyles({
        font: 'subtitle-02',
        color: props.$isColor
          ? 'var(--myspec-gray-scalewhite)'
          : 'var(--myspec-gray-scalegray-900)',
      });
    }};
  }
`;
const Act = styled.div`
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: var(--myspec-primaryblue-1);
  &.isRed {
    background-color: var(--myspec-primaryred-1);
  }
  & > .text {
    ${applyFontStyles({
      font: 'subtitle_01',
      color: 'var(--myspec-gray-scalegray-100)',
    })}
  }
`;
