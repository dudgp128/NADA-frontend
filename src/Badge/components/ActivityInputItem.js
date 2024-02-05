// 활동 이력을 입력받는 컴포넌트
import styled from 'styled-components';
import { Dropdown, TextWarpper } from '../../Community/styles/DropdownStyle';
import { FilterHandler } from '../../icon/FilterHandler';
import { applyFontStyles } from '../../styles/fontStyle';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList, changeIndexField } from '../modules/redux/badge';
import InputBoxWithX from './InputBoxWithX';

const DateWrapper = styled.div`
  display: flex;

  & > span {
    ${applyFontStyles({
      font: 'title-01',
      color: 'var(--myspec-gray-scalegray-500)',
    })}
  }
`;

const ActivityInputItem = ({ index }) => {
  const dispatch = useDispatch();

  const activitiyContent = useSelector(
    ({ badge }) => badge.activities[index].content,
  );

  const onClose = () => {
    dispatch(deleteList({ type: 'activities', index }));
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeIndexField({ type: 'activities', index, name, value }));
  };

  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <InputBoxWithX
        name={'content'}
        placeholder={'내용을 입력해주세요.'}
        onChange={onChange}
        onClose={onClose}
        value={activitiyContent}
      />
      <DateWrapper>
        <Dropdown className={'unselected'}>
          <TextWarpper className={'unselected'}>2023.01</TextWarpper>
          <FilterHandler className={'unselected'} />
        </Dropdown>
        <span> ~ </span>
        <Dropdown className={'unselected'}>
          <TextWarpper className={'unselected'}>2023.02</TextWarpper>
          <FilterHandler className={'unselected'} />
        </Dropdown>
      </DateWrapper>
    </div>
  );
};

export default ActivityInputItem;
