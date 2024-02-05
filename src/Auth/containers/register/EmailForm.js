// 회원가입 - 이메일을 입력받는 컨테이너
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import client from '../../../lib/api/client';
import { authSelector } from '../../modules/redux/auth';
import { useCallback } from 'react';
import Title from '../../components/Title';
import Caution from '../../components/Caution';
import useDebounce from '../../modules/useDebounce';
import { LoginBtn, InputBox } from '../../../styles/Survey';

const EmailForm = ({ dispatchField, onSubmit, order, type }) => {
  const errorMessages = {
    email_format: '이메일 형식이 올바르지 않아요.',
    email_duplicate: '이미 등록된 이메일이에요.',
  };

  const [error, setError] = useState(null); // error 메세지 관리
  const email = useSelector(authSelector(type, 'email')); // email 상태 가져오기
  const debounceVal = useDebounce(email);

  // 버튼 투명도, 비활성화 상태 관리
  const [disabled, setDisabled] = useState(true);

  // email 유효성 검사
  const checkEmail = useCallback(() => {
    const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setError(emailRegexp.test(email) ? null : errorMessages.email_format);
    return emailRegexp.test(email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  // email 중복 검사
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { status } = await client.get('user/email', {
          params: { email: email },
        });
        if (status === 200) {
          setError(null);
          setDisabled(false);
        }
      } catch (error) {
        setError(errorMessages.email_duplicate);
        setDisabled(true);
      }
    };

    if (debounceVal && checkEmail()) fetchData(); // fetchData 함수 호출
  }, [debounceVal]);

  return (
    <>
      <Title text={(type === 'team' ? '단체 ' : '').concat('이메일을')} />
      <form onSubmit={onSubmit} id={order}>
        <InputBox>
          <input
            name="email"
            placeholder="이메일"
            onChange={dispatchField}
            value={email}
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
export default EmailForm;
