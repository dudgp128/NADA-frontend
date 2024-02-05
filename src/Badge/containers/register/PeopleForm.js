import { TitleBox } from '../../../styles/Survey';
import { useSelector } from 'react-redux';

import PeopleInfoInput from '../../components/PeopleInfoInput';
import IssueListTeam from '../../components/IssueListTeam';

const PeopleForm = ({ onSubmit }) => {
  const teams = useSelector(({ badge }) => badge.teams);

  return (
    <>
      <TitleBox>
        발급 받을 사람의
        <br />
        정보를 입력해 주세요
      </TitleBox>

      {/* 팀 추가를 하지 않았을때, */}
      {teams.length === 0 && <PeopleInfoInput onSubmit={onSubmit} />}

      {/* 팀 추가를 했을때,  */}
      {teams.length !== 0 && <IssueListTeam onSubmit={onSubmit} />}
    </>
  );
};

export default PeopleForm;
