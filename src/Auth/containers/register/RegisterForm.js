// 회원가입 - 회원가입을 전체적으로 관리하는 컨테이너
import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/redux/auth';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../../modules/queries/useSignup';
import { BackSvg } from '../../../icon/BackSvg';

// 동적으로 불러오기 (컴포넌트 안에 선언시, input 입력때마다 화면이 깜박임.)
const EmailForm = React.lazy(() => import('./EmailForm'));
const PasswordForm = React.lazy(() => import('./PasswordForm'));
const UserNameForm = React.lazy(() => import('./UserNameForm'));
const PhoneNumberForm = React.lazy(() => import('./PhoneNumberForm'));
const TeamTypeForm = React.lazy(() => import('./TeamTypeForm'));
const RepresentForm = React.lazy(() => import('./RepresentForm'));
const TeamNameForm = React.lazy(() => import('./TeamNameForm'));
const RegionForm = React.lazy(() => import('./RegionForm'));
const FieldForm = React.lazy(() => import('./FieldForm'));

const RegisterForm = ({ type }) => {
  // 컴포넌트 배열에 넣기, 현재 컴포넌트 설정하기
  const forms = {
    personal: [
      EmailForm,
      PasswordForm,
      UserNameForm,
      RegionForm,
      FieldForm,
      PhoneNumberForm,
    ],
    team: [
      EmailForm,
      PasswordForm,
      TeamNameForm,
      TeamTypeForm,
      RepresentForm,
      PhoneNumberForm,
    ],
  };
  const [order, setOrder] = useState(0); // 입력 순서
  const Components = forms[type][order];

  const dispatch = useDispatch();
  const register = useSelector(({ auth }) => auth[`${type}_register`]);

  useEffect(() => {
    dispatch(initializeForm(`${type}_register`));
    // Unmount시, 상태 초기화하기 (=지우기)
    return () => {
      dispatch(initializeForm(`${type}_register`));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 회원가입 하기 (서버에 전송)
  const { mutate } = useSignup();
  const onSubmit = (e) => {
    e.preventDefault();

    // 마지막 form 입력일때, 회원가입 실행하기
    if (order === forms[type].length - 1) {
      mutate({ params: register, type: type });
    } else setOrder(order + 1);
  };

  // 입력 값을 상태에 반영하기
  const dispatchField = useCallback((e) => {
    const { value, name } = e.target;
    const fieldType = `${type}_register`;
    dispatch(changeField({ form: fieldType, key: name, value }));
  }, []);

  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    if (order === 0) {
      navigate(-1);
    } else setOrder(order - 1);
  };

  return (
    <>
      <div className="backBtnWrapper" onClick={goBack}>
        <BackSvg />
      </div>
      <Suspense fallback={<div></div>}>
        <Components
          dispatchField={dispatchField}
          onSubmit={onSubmit}
          order={order}
          type={type}
        />
      </Suspense>
    </>
  );
};

export default RegisterForm;
