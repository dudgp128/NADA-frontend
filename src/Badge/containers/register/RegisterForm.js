// 뱃지 발급의 전 과정을 관리하는 index 컨테이너
import React, { useState, useCallback, useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { changeField } from '../../modules/redux/badge';
import { changeBarStatus } from '../../../Bar/modules/redux/bar';
import styled from 'styled-components';
import { applyFontStyles } from '../../../styles/fontStyle';
import { CenterGrid } from '../../../styles/Survey';

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${applyFontStyles({
    font: 'body-01',
    color: 'var(--myspec-gray-scalegray-600)',
  })}
  height: fit-content;
  width: 375px;
  padding: 19px 16px 32px 16px;
  margin: 0 auto;
  box-sizing: border-box;

  & > .indicator {
    padding: 2px 12px;
    gap: 2px;
    border-radius: 23px;
    background: var(--myspec-Gray-scale-Gray-300, #e4e4e4);
    justify-self: end;
    & > span {
      ${applyFontStyles({
        font: 'subtitle-01',
        color: 'var(--myspec-gray-scalegray-600)',
      })}

      &:nth-child(1) {
        color: var(--myspec-primaryblue-1);
      }
    }
  }
`;

const RegisterForm = () => {
  const NameForm = lazy(() => import('./NameForm'));
  const ShapeForm = lazy(() => import('./ShapeForm'));
  const ExplainForm = lazy(() => import('./ExplainForm'));
  const ActivityForm = lazy(() => import('./ActivityForm'));
  const TeamForm = lazy(() => import('./TeamForm'));
  const PeopleForm = lazy(() => import('./PeopleForm'));
  const PriviewBadge = lazy(() => import('./PreviewBadge'));

  const [order, setOrder] = useState(0);

  const forms = [
    NameForm,
    ShapeForm,
    ExplainForm,
    TeamForm,
    ActivityForm,
    PeopleForm,
    PriviewBadge,
  ];
  const Components = forms[order];

  const onSubmit = (e) => {
    e.preventDefault();
    if (order === forms.length) {
    } else setOrder(order + 1);
  };

  const dispatch = useDispatch();
  // 입력 값을 상태에 반영하기
  const dispatchField = useCallback((e) => {
    const { value, name } = e.target;
    dispatch(changeField({ key: name, value }));
  }, []);

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '뱃지 발급',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <>
      <TopContainer>
        <div
          onClick={() => {
            setOrder(order - 1);
          }}
        >
          {order > 0 && '뒤로가기'}
        </div>
        <div className="indicator">
          <span>{order + 1}</span>
          <span>/</span>
          <span>{forms.length}</span>
        </div>
      </TopContainer>

      <CenterGrid>
        <Suspense fallback={<div></div>}>
          <Components
            dispatchField={dispatchField}
            onSubmit={onSubmit}
            order={order}
          />
        </Suspense>
      </CenterGrid>
    </>
  );
};

export default RegisterForm;
