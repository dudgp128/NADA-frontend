import { useDispatch, useSelector } from 'react-redux';
import IssueListInputItem from './IssueListInputItem';
import { ButtonContainer } from '../containers/register/ActivityForm';
import { Cancel, Act } from '../../Modal/components/usedInModal/BottomButton';
import { addList } from '../modules/redux/badge';

const PeopleInfoInput = ({ onSubmit }) => {
  const issueList = useSelector(({ badge }) => badge.issueList);
  const dispatch = useDispatch();
  const onClick = () => {
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
      <div
        style={{
          overflowY: 'scroll',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {issueList.map((el, index) => (
          <IssueListInputItem key={index} content={el} index={index} />
        ))}
      </div>

      <ButtonContainer>
        <Cancel onClick={() => onClick()}>
          <div className="text">발급자 추가하기</div>
        </Cancel>
        <Act onClick={onSubmit}>
          <div className="text" style={{ color: 'white' }}>
            다음
          </div>
        </Act>
      </ButtonContainer>
    </>
  );
};

export default PeopleInfoInput;
