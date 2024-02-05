import styled from 'styled-components';
import { InputBox } from '../../styles/Survey';
import { useDispatch } from 'react-redux';
import InputBoxWithX from './InputBoxWithX';
import { changeIndexField, deleteList } from '../modules/redux/badge';

const InputGrid = styled(InputBox)`
  width: 100%;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(45%, auto));
  gap: 8px;

  & > input {
    background: var(--myspec-gray-scalegray-100, #f2f2f2);
  }

  & > :nth-child(1) {
    grid-column: 1 / span 2;
    & > div {
      input::placeholder {
        color: var(--myspec-primaryblue-1);
      }
    }
  }
`;

const IssueListInputItem = ({ index, content }) => {
  const dispatch = useDispatch();
  const { name, role, birth, number, email } = content;

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeIndexField({ type: 'issueList', index, name, value }));
  };

  const onClose = () => {
    dispatch(deleteList({ type: 'issueList', index }));
  };

  return (
    <InputGrid>
      <InputBoxWithX
        className="name"
        name={'name'}
        onChange={onChange}
        value={name}
        placeholder={'이름'}
        onClose={onClose}
      />
      <input
        onChange={onChange}
        value={role}
        name={'role'}
        placeholder="직책"
        required
      />
      <input
        onChange={onChange}
        value={birth}
        name={'birth'}
        placeholder="생년월일"
        required
      />
      <input
        onChange={onChange}
        value={number}
        name={'number'}
        placeholder="전화번호"
        required
      />
      <input
        onChange={onChange}
        value={email}
        name={'email'}
        placeholder="E-mail"
        required
      />
    </InputGrid>
  );
};

export default IssueListInputItem;
