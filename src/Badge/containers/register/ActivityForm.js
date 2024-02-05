// 활동 이력을 입력받는 컨테이너
import { TitleBox } from '../../../styles/Survey';
import ActivityInputItem from '../../components/ActivityInputItem';
import {
  ButtonList,
  Cancel,
  Act,
} from '../../../Modal/components/usedInModal/BottomButton';
import styled from 'styled-components';
import { applyFontStyles } from '../../../styles/fontStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../modules/redux/badge';
import { useState, useEffect } from 'react';

export const ButtonContainer = styled(ButtonList)`
  width: 100%;
  align-items: end;
  bottom: 50px;

  & > div {
    height: fit-content;
    & > .text {
      ${applyFontStyles({ font: 'title-01' })}
    }
  }
`;

const ActivityForm = ({ onSubmit, order, dispatchField }) => {
  const [disabled, setDisabeld] = useState(false);
  const activities = useSelector(({ badge }) => badge.activities);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      addList({
        type: 'activities',
        value: { content: '', started: '', end: '' },
      }),
    );
  };

  // activities 속성 중에 하나라도 빈 값이 있으면, disabled=true
  /*const hasEmptyValue = (arr) => {
    return arr.some((obj) => Object.values(obj).some((value) => value === ''));
  };

  useEffect(() => {
    if (hasEmptyValue) {
      setDisabeld(true);
    } else {
      setDisabeld(false);
    }
  }, [activities]);*/

  return (
    <>
      <TitleBox>
        거의 다 왔어요 <br />
        활동 내역을 추가해 주세요
      </TitleBox>
      <div style={{ overflowY: 'scroll' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {activities.map((el, index) => (
            <ActivityInputItem key={index} content={el} index={index} />
          ))}
        </div>
      </div>
      <ButtonContainer>
        <Cancel onClick={() => onClick()}>
          <div className="text">내역 추가하기</div>
        </Cancel>
        <Act onClick={onSubmit} className={disabled && 'disabled'}>
          <div className="text" style={{ color: 'white' }}>
            다음
          </div>
        </Act>
      </ButtonContainer>
    </>
  );
};

export default ActivityForm;
