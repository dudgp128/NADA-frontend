import { useCallback } from 'react';
import { useState } from 'react';
import { LoginBtn, InputBox } from '../../../styles/Survey';
import { useEffect } from 'react';
import { authSelector } from '../../modules/redux/auth';
import { useSelector } from 'react-redux';
import Title from '../../components/Title';
import Caution from '../../components/Caution';

const PhoneNumberForm = ({ dispatchField, onSubmit, order, type }) => {
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const phoneNumber = useSelector(authSelector(type, 'phoneNumber'));

  const checkNumber = useCallback((phoneNumber) => {
    const NumberRegex = /^01([0|1|6|7|8|9])\d{3,4}\d{4}$/;
    setError(
      NumberRegex.test(phoneNumber) ? null : '올바른 번호 형식이 아닙니다.',
    );
    return NumberRegex.test(phoneNumber);
  }, []);

  const onChange = (e) => {
    dispatchField(e);
    checkNumber(e.target.value);
    setDisabled(error);
  };

  useEffect(() => {
    setDisabled(phoneNumber !== '' ? error : true);
  }, [error, phoneNumber]);

  return (
    <>
      <Title text={'휴대폰 번호를'} />
      <form onSubmit={onSubmit} id={order}>
        <InputBox>
          <input
            name="phoneNumber"
            placeholder="번호"
            onChange={onChange}
            required
          />
        </InputBox>
      </form>
      <Caution error={error} />
      <LoginBtn form={order} disabled={disabled}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};
export default PhoneNumberForm;
