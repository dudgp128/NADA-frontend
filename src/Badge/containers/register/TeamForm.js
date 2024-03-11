// 뱃지에 대한 설명을 입력받는 컨테이너
import { Explain, TitleBox } from '../../../styles/Survey';
import { AddOperator } from '../../../icon/AddOperator';
import styled from 'styled-components';
import { applyFontStyles } from '../../../styles/fontStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addList, changeTeam, deleteList } from '../../modules/redux/badge';
import InputBoxWithX from '../../components/InputBoxWithX';
import { useState, useEffect } from 'react';
import BottomButton from '../../components/BottomButton';

const ButtonWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  height: fit-content;
  align-items: center;
  border-radius: 10px;
  padding: 12px 13px;
  background: var(--myspec-gray-scalegray-100, #f2f2f2);
  gap: 8px;
  ${applyFontStyles({ font: 'body-02', color: 'var(--myspec-primaryblue-1)' })}
`;

const TeamForm = ({ onSubmit, order, dispatchField }) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  const onChange = (e, index) => {
    const { value } = e.target;
    dispatch(changeTeam({ index, value }));
  };

  // 팀 추가하기
  const onClick = () => {
    dispatch(addList({ type: 'teams', value: '' }));
  };

  // 팀 제거하기
  const onClose = (index) => {
    dispatch(deleteList({ type: 'teams', index }));
  };
  const teams = useSelector(({ badge }) => badge.teams);

  useEffect(() => {
    // 배열 안에 빈 요소가 하나라도 있으면 true를 반환
    if (teams.some((team) => team === '') || teams.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [teams]);

  return (
    <>
      <TitleBox>
        팀을 추가해 주세요
        <Explain>
          뱃지 안에서 팀을 나누고 팀 별로 발급할 수 있어요
          <br />
          팀이 없다면 건너뛰기를 눌러주세요
        </Explain>
      </TitleBox>
      <div
        style={{
          overflowY: 'scroll',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <ButtonWrapper onClick={onClick}>
          <AddOperator color={'var(--myspec-primaryblue-1)'} />
          <span> 팀 추가하기 </span>
        </ButtonWrapper>

        {teams.map((el, index) => (
          <InputBoxWithX
            key={index}
            index={index}
            name={'teams'}
            placeholder={'팀 이름을 입력해주세요'}
            onChange={onChange}
            onClose={onClose}
            value={el}
          />
        ))}
      </div>
      <BottomButton
        grayAct={(e) => onSubmit(e)}
        grayText={'건너뛰기'}
        actText={'다음'}
        act={(e) => onSubmit(e)}
        isDisabled={disabled}
      />
    </>
  );
};

export default TeamForm;
