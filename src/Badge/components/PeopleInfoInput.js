import { useDispatch, useSelector } from 'react-redux';
import IssueListInputItem from './IssueListInputItem';
import { addList } from '../modules/redux/badge';
import BottomButton from './BottomButton';

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

      <BottomButton
        grayAct={() => onClick()}
        grayText={'발급자 추가하기'}
        act={(e) => onSubmit(e)}
        actText={'다음'}
      />
    </>
  );
};

export default PeopleInfoInput;
