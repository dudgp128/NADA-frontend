// 뱃지 이름을 입력받는 컨테이너
import styled from 'styled-components';
import { InputBox, LoginBtn, TitleBox } from '../../../styles/Survey';
import { useSelector } from 'react-redux';
import { applyFontStyles } from '../../../styles/fontStyle';

export const MarginBtn = styled(LoginBtn)`
  position: relative;
  bottom: 50px;

  & > div {
    ${applyFontStyles({ font: 'title-01', color: 'white' })}
  }
`;

const NameForm = ({ onSubmit, order, dispatchField }) => {
  const name = useSelector(({ badge }) => badge.name);

  return (
    <>
      <TitleBox>
        뱃지 발급을 시작할게요!
        <br />
        뱃지 이름은 어떻게 할까요?
      </TitleBox>
      <form onSubmit={onSubmit} id={order}>
        <InputBox>
          <input
            name="name"
            placeholder="20자 이내로 입력해 주세요."
            onChange={dispatchField}
            value={name}
            maxLength={20}
            required
          />
        </InputBox>
      </form>
      <MarginBtn form={order} disabled={!(name.length > 0)}>
        <div>다음</div>
      </MarginBtn>
    </>
  );
};

export default NameForm;
