import RegisterForm from '../containers/register/RegisterForm';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useDispatch } from 'react-redux';
import { RegisterBox } from '../../styles/Survey';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const registerMap = {
    '/register/personal': 'personal',
    '/register/team': 'team',
  };

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
      <RegisterBox>
        <RegisterForm type={registerMap[pathname]} />
      </RegisterBox>
    </>
  );
};
export default RegisterPage;
