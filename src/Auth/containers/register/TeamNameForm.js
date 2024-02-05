import { useSelector } from 'react-redux';
import { authSelector } from '../../modules/redux/auth';
import { LoginBtn, InputBox } from '../../../styles/Survey';
import Title from '../../components/Title';

const TeamNameForm = ({ dispatchField, onSubmit, order, type }) => {
  const groupName = useSelector(authSelector(type, 'groupName')); // userName 상태 가져오기

  return (
    <>
      <Title text={'단체 이름을'} />
      <form onSubmit={onSubmit} id={order}>
        <InputBox>
          <input
            name="groupName"
            placeholder="단체 이름"
            onChange={dispatchField}
            value={groupName}
            required
          />
        </InputBox>
      </form>
      <LoginBtn form={order}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};

export default TeamNameForm;
