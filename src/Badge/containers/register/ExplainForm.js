// 뱃지에 대한 설명을 입력받는 컨테이너
import { Explain, InputBox, TitleBox } from '../../../styles/Survey';
import { useSelector } from 'react-redux';
import { MarginBtn } from './NameForm';

const ExplainForm = ({ onSubmit, order, dispatchField }) => {
  const explain = useSelector(({ badge }) => badge.explain);

  return (
    <>
      <TitleBox>
        뱃지의 설명을 적어 주세요
        <br />
        <Explain>
          어디서 어떤 이유로 발급하는 뱃지인가요?
          <br />
          단체의 설명을 적어도 좋아요
        </Explain>
      </TitleBox>
      <form onSubmit={onSubmit} id={order}>
        <InputBox>
          <textarea
            name="explain"
            placeholder="120자 이내로 입력해 주세요."
            onChange={dispatchField}
            value={explain}
            maxLength={120}
            required
          />
        </InputBox>
      </form>
      <MarginBtn form={order} disabled={!(explain.length > 0)}>
        <div>다음</div>
      </MarginBtn>
    </>
  );
};

export default ExplainForm;
