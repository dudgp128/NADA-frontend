import { useEffect, useState } from 'react';
import LoginForm from '../containers/login/LoginForm';
import { LoginBox } from '../../styles/Survey';
import { useLocation } from 'react-router-dom';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useDispatch } from 'react-redux';
import { MySpecLogo } from '../../icon/MySpecLogo';
import SocialLogin from '../containers/login/SocialLogin';
import LoginFooter from '../containers/login/LoginFooter';

const LoginPage = () => {
  const locationMap = {
    '/login/personal': 'personal',
    '/login/team': 'team',
  };

  const location = useLocation();
  const dispatch = useDispatch();
  const [type, setType] = useState(null);

  useEffect(() => {
    setType(locationMap[location.pathname]);
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, [location.pathname]);

  return (
    <>
      <LoginBox>
        <div>
          <MySpecLogo className="LogoBox" />
        </div>
        <div>
          <LoginForm type={type} />
          <div>
            {type === 'personal' && <SocialLogin />}
            <LoginFooter type={type} />
          </div>
        </div>
      </LoginBox>
    </>
  );
};

export default LoginPage;
