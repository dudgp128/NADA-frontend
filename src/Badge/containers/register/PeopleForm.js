// 발급 받을 사람의 정보를 입력하는 화면
// 팀 추가시, 해당 팀 목록을 표시하고 선택하면 동적으로 화면 업데이트
import { TitleBox } from '../../../styles/Survey';
import { useSelector } from 'react-redux';

import PeopleInfoInput from '../../components/PeopleInfoInput';
import IssueListTeam from '../../components/IssueListTeam';
import { useState } from 'react';

const PeopleForm = ({ onSubmit }) => {
  const teams = useSelector(({ badge }) => badge.teams);

  // 팀 추가시, 팀 리스트를 보여주는 index 화면인지 아닌지
  // setList로 현재 들어온 팀 소속을 설정해줍니다.
  const [teamName, setTeamName] = useState('');

  return (
    <>
      {teamName === '' && (
        <TitleBox>
          발급 받을 사람의
          <br />
          정보를 입력해 주세요
        </TitleBox>
      )}

      {teamName && (
        <TitleBox
          style={{ textDecoration: 'underline' }}
          onClick={() => {
            setTeamName('');
          }}
        >{`<　${teamName}`}</TitleBox>
      )}

      {/* 팀 추가를 하지 않았을때, */}
      {teams.length === 0 && <PeopleInfoInput onSubmit={onSubmit} />}

      {/* 팀 추가를 했을때,  */}
      {teams.length !== 0 && (
        <IssueListTeam
          onSubmit={onSubmit}
          teamName={teamName}
          setTeamName={setTeamName}
        />
      )}
    </>
  );
};

export default PeopleForm;
