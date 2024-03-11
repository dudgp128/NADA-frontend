import { useDispatch, useSelector } from 'react-redux';
import { RightArrowSvg } from '../../icon/Login/RightArrowSvg';
import { FixedLoginBtn } from '../containers/register/ShapeForm';
import { TextWithSvg } from '../../styles/Survey';
import IssueListInputItem from './IssueListInputItem';
import { addList } from '../modules/redux/badge';
import { useState, useEffect } from 'react';

const IssueListTeam = ({ onSubmit, teamName, setTeamName }) => {
  const issueList = useSelector(({ badge }) => badge.issueList);
  const teams = useSelector(({ badge }) => badge.teams);

  const [disabled, setDisabled] = useState(true);

  // issueList 속성 중에 하나라도 빈 값이 있으면, disabled=true
  const hasEmptyValue = () => {
    return issueList.some((obj) =>
      Object.values(obj).some((value) => value === ''),
    );
  };

  useEffect(() => {
    if (hasEmptyValue()) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [issueList]);

  const dispatch = useDispatch();

  const dispatchAddList = () => {
    dispatch(
      addList({
        type: 'issueList',
        value: {
          name: '',
          role: '',
          birth: '',
          email: '',
          number: '',
          team: '',
        },
      }),
    );
  };

  return (
    <>
      {/* 팀 존재 o, 팀 리스트를 보여줄때 */}
      {teamName === '' && (
        <>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {teams.map((team) => (
              <TextWithSvg
                onClick={() => {
                  setTeamName(team);
                }}
              >
                <div>{team}</div>
                <RightArrowSvg width={8} height={16} />
              </TextWithSvg>
            ))}
          </div>
          <FixedLoginBtn onClick={onSubmit} disabled={disabled}>
            <div style={{ padding: '14px 0px' }}>다음</div>
          </FixedLoginBtn>
        </>
      )}

      {/* 팀 존재 o, 특정 팀을 클릭했을때*/}
      {teamName && (
        <>
          <div
            style={{
              overflowY: 'scroll',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {issueList.map((el, index) => (
              <IssueListInputItem
                key={index}
                content={el}
                index={index}
                teamName={teamName}
              />
            ))}
          </div>
          <FixedLoginBtn
            onClick={() => {
              dispatchAddList();
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--myspec-gray-scalegray-100)',
                color: 'var(--myspec-gray-scalegray-900)',
              }}
            >
              정보 추가하기
            </div>
          </FixedLoginBtn>
        </>
      )}
    </>
  );
};

export default IssueListTeam;
