import React, { useCallback, useState, useEffect } from 'react';
import TeamTypeList from '../../components/TeamType/TeamTypeList';
import Title from '../../components/Title';
import { LoginBtn } from '../../../styles/Survey';
import { useSelector } from 'react-redux';
import { authSelector } from '../../modules/redux/auth';

const TeamTypeForm = ({ dispatchField, order, onSubmit }) => {
  const [teamType, setTeamType] = useState([
    { id: 11, text: '교내 동아리', checked: false },
    { id: 12, text: '연합 동아리', checked: false },
    { id: 13, text: '학회', checked: false },
    { id: 14, text: '학과', checked: false },
    { id: 15, text: '학생회', checked: false },
    { id: 21, text: '공공기관', checked: false },
    { id: 22, text: '사기업', checked: false },
  ]);
  const [disabled, setDisabled] = useState(true);

  const category = useSelector(authSelector('team', 'category')); // userName 상태 가져오기
  const onClick = useCallback(
    (id) => {
      setTeamType(
        teamType.map((team) =>
          id === team.id
            ? { ...team, checked: !team.checked }
            : { ...team, checked: false },
        ),
      );
      dispatchField({
        target: {
          value: id,
          name: 'category',
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [teamType],
  );

  useEffect(() => {
    if (category) {
      setDisabled(false);
    } else setDisabled(true);
  }, [category]);

  // 뒤로가기시, 이전 category값이 동일하게 표시
  useEffect(() => {
    if (category) {
      setTeamType(
        teamType.map((team) =>
          category === team.id
            ? { ...team, checked: !team.checked }
            : { ...team, checked: false },
        ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Title text={'단체 종류를'} />
      <form id={order} onSubmit={onSubmit}>
        <TeamTypeList teamType={teamType} onClick={onClick} />
      </form>
      <LoginBtn form={order} disabled={disabled}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};

export default TeamTypeForm;
