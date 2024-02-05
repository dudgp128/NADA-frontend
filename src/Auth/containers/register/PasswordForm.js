import { useState, useEffect, useCallback } from 'react';
import { produce } from 'immer';
import { useSelector } from 'react-redux';
import { authSelector } from '../../modules/redux/auth';
import { LoginBtn, InputBox } from '../../../styles/Survey';
import CheckList from '../../components/CheckList/CheckList';
import Title from '../../components/Title';
const PasswordForm = ({ dispatchField, onSubmit, order, type }) => {
  // error 메세지 관리하기
  const [check, setCheck] = useState({
    password: [
      { id: 'Password_length', text: '8-16자', checked: false },
      { id: 'Password_words', text: '영문 대/소문자, 숫자', checked: false },
      { id: 'Password_special', text: '특수문자 포함', checked: false },
    ],
    passwordConfirm: [{ id: 'same', text: '비밀번호 일치', checked: false }],
  });
  // 버튼 투명도, 비활성화 상태 관리
  const [disabled, setDisabled] = useState(true);

  // password 상태 가져오기
  const password = useSelector(authSelector(type, 'password'));
  const passwordConfirm = useSelector(authSelector(type, 'passwordConfirm'));

  // 비밀번호 유효성 검사
  const checkPassword = useCallback(() => {
    setCheck(
      produce((draft) => {
        draft.password[0].checked =
          password.length >= 8 && password.length <= 16;
        const wordsRegex = new RegExp(/(?=.*[a-zA-Z])(?=.*[0-9])/);
        const specialRegex = new RegExp(/[!@#$%^&*]/);
        draft.password[1].checked = wordsRegex.test(password);
        draft.password[2].checked = specialRegex.test(password);
      }),
    );
    // '비밀번호 확인'에 값이 있으면 '일치'까지 검사하기
    if (passwordConfirm) {
      checkPasswordConfirm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, passwordConfirm]);

  // 비밀번호 일치 검사
  const checkPasswordConfirm = () => {
    setCheck(
      produce((draft) => {
        draft.passwordConfirm[0].checked =
          password === '' ? false : password === passwordConfirm;
      }),
    );
  };

  // 비밀번호 입력이 변경될때마다 check함수 실행하기
  useEffect(() => {
    checkPassword();
    checkPasswordConfirm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkPassword, password, passwordConfirm]);

  // check 상태 변경시, 버튼 투명도, 활성화 상태 업데이트
  useEffect(() => {
    const isAllPasswordChecked = check.password.reduce(
      (acc, current) => acc && current.checked,
      true,
    );
    const isPasswordConfirmChecked = check.passwordConfirm[0].checked;
    setDisabled(!(isAllPasswordChecked && isPasswordConfirmChecked));
  }, [check]);

  // 닉네임에서 뒤로가기시, 이전 비밀번호와 check값과 동일하게
  useEffect(() => {
    if (password && passwordConfirm) {
      checkPassword(password);
      checkPasswordConfirm({ password, passwordConfirm });
      const isAllPasswordChecked = check.password.reduce(
        (acc, current) => acc && current.checked,
        true,
      );
      const isPasswordConfirmChecked = check.passwordConfirm[0].checked;
      setDisabled(!(isAllPasswordChecked && isPasswordConfirmChecked));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Title text={'사용할 비밀번호를'} />
      <form onSubmit={onSubmit} id={order}>
        <InputBox>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={dispatchField}
            value={password}
            required
          />
          <CheckList list={check.password} />
          <div />
          <div />
          <input
            type="password"
            name="passwordConfirm"
            placeholder="한 번 더 입력해주세요."
            onChange={dispatchField}
            value={passwordConfirm}
            required
          />
          <CheckList list={check.passwordConfirm} />
        </InputBox>
      </form>
      <LoginBtn form={order} disabled={disabled}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};
export default PasswordForm;
