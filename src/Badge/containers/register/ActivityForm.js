// 활동 이력을 입력받는 컨테이너
import { TitleBox } from '../../../styles/Survey';
import ActivityInputItem from '../../components/ActivityInputItem';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../modules/redux/badge';
import { useState, useEffect } from 'react';
import BottomButton from '../../components/BottomButton';

const ActivityForm = ({ onSubmit, order }) => {
  const [disabled, setDisabeld] = useState(false);
  const activities = useSelector(({ badge }) => badge.activities);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      addList({
        type: 'activities',
        value: { content: '', started: '', ended: '' },
      }),
    );
  };

  // activities 속성 중에 하나라도 빈 값이 있으면, disabled=true
  const hasEmptyValue = () => {
    return activities.some((obj) =>
      Object.values(obj).some((value) => value === ''),
    );
  };

  useEffect(() => {
    if (hasEmptyValue()) {
      setDisabeld(true);
    } else {
      setDisabeld(false);
    }
  }, [activities]);

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

      <BottomButton
        grayAct={() => onClick()}
        grayText={'내역 추가하기'}
        actText={'다음'}
        act={(e) => onSubmit(e)}
        isDisabled={disabled}
      />
    </>
  );
};

export default ActivityForm;
