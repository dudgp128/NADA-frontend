import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../modules/redux/auth';
import { LoginBtn, InputBox } from '../../../styles/Survey';
import Title from '../../components/Title';
import Caution from '../../components/Caution';

const RepresentForm = ({ dispatchField, onSubmit, order, type }) => {
  const [error, setError] = useState(null); // error 메세지 관리

  const represent = useSelector(authSelector(type, 'represent'));

  const checkRepresentName = () => {
    const koreanNameRegex = new RegExp(/^[가-힣]{2,5}$/);
    const result = koreanNameRegex.test(represent);
    setError(result ? null : '올바른 한글 이름이 아닙니다.');
    return result;
  };

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (checkRepresentName()) {
        onSubmit(e);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [error, represent],
  );

  return (
    <>
      <Title text={'대표자 이름을'} />
      <form onSubmit={handleFormSubmit} id={order}>
        <InputBox>
          <input
            name="represent"
            placeholder="대표자 이름"
            onChange={dispatchField}
            value={represent}
            required
          />
        </InputBox>
        {error && <Caution error={error} />}
      </form>
      <LoginBtn form={order}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};

export default RepresentForm;
