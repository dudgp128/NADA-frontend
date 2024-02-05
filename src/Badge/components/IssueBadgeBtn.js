// '뱃지 발급하기' 버튼
import styled from 'styled-components';
import { AddOperator } from '../../icon/AddOperator';
import { applyFontStyles } from '../../styles/fontStyle';

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 104px;
  left: calc(50% - 59px);
  display: flex;
  padding: 8px 12px;
  gap: 6px;
  align-items: center;
  z-index: 100;

  border-radius: 40px;
  background: var(--myspec-Gray-scale-Gray-800, #424242);

  /* shadow_button */
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);

  & > svg {
    align-self: center;
  }
  & > div {
    ${applyFontStyles({ font: 'body-01', color: '#fff' })}
    text-align: center;
    align-self: center;
  }
`;

const IssueBadgeBtn = () => {
  return (
    <ButtonWrapper>
      <AddOperator color={'#2FEDAF'} />
      <div> 뱃지 발급하기 </div>
    </ButtonWrapper>
  );
};

export default IssueBadgeBtn;
