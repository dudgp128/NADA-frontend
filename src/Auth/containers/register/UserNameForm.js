import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import client from '../../../lib/api/client';
import { authSelector } from '../../modules/redux/auth';
import { produce } from 'immer';
import CheckList from '../../components/CheckList/CheckList';
import { LoginBtn, InputBox } from '../../../styles/Survey';
import Title from '../../components/Title';
import Caution from '../../components/Caution';
import useDebounce from '../../modules/useDebounce';

const UserNamePage = ({ dispatchField, onSubmit, order, type }) => {
  const [error, setError] = useState(null); // error 메세지 관리
  const [check, setCheck] = useState([
    { id: 'userName_length', text: '1-8자', checked: false },
    { id: 'userName_words', text: '한글 또는 영문', checked: false },
  ]); // error 메세지 관리

  const userName = useSelector(authSelector(type, 'userName')); // userName 상태 가져오기

  const debounceVal = useDebounce(userName);

  // userName 유효성 검사
  const checkUserName = () => {
    setCheck(
      produce((draft) => {
        draft[0].checked = debounceVal.length >= 1 && debounceVal.length <= 8;
        const textRegex = new RegExp(/^[가-힣a-zA-Z]+$/);
        draft[1].checked = textRegex.test(debounceVal);
      }),
    );
    return check.every((item) => item.checked);
  };

  // userName 입력이 변경될때마다 check 함수 실행하기
  useEffect(() => {
    checkUserName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, check]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { status } = await client.get('user/userName', {
          params: { userName: userName },
        });
        if (status === 200) {
          setError(null);
        }
      } catch (error) {
        setError('중복된 닉네임 입니다.');
      }
    };
    if (checkUserName()) fetchData(); // fetchData 함수 호출
  }, [debounceVal]);

  // 폰번호에서 뒤로가기시, 이전 닉네임과 check값이 동일하게 표시
  useEffect(() => {
    if (userName) {
      checkUserName();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Title text={'사용할 닉네임을'} />
      <form onSubmit={onSubmit} id={order}>
        <InputBox>
          <input
            name="userName"
            placeholder="닉네임"
            onChange={dispatchField}
            value={userName}
            required
          />
          <CheckList list={check} />
        </InputBox>
      </form>
      <Caution error={error} />
      <LoginBtn
        form={order}
        disabled={error || !check.every((item) => item.checked)}
      >
        <div>다음</div>
      </LoginBtn>
    </>
  );
};

export default UserNamePage;
