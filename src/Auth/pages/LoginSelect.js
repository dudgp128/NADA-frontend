import { useEffect } from 'react';
import { LoginBox, LoginBtn } from '../../styles/Survey';
import { Link } from 'react-router-dom';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useDispatch } from 'react-redux';
import { MySpecLogo } from '../../icon/MySpecLogo';

const LogInSelect = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <>
      <LoginBox className="LoginBox">
        <MySpecLogo />
        <LoginBtn className="LoginBtn">
          <Link to="/login/personal">개인 회원</Link>
          <Link to="/login/team">단체 회원</Link>
        </LoginBtn>
      </LoginBox>
    </>
  );
};

export default LogInSelect;
