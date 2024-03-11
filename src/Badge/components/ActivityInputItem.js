// 활동 이력을 입력받는 컴포넌트
import styled from 'styled-components';
import { Dropdown, TextWarpper } from '../../Community/styles/DropdownStyle';
import { FilterHandler } from '../../icon/FilterHandler';
import { applyFontStyles } from '../../styles/fontStyle';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList, changeIndexField } from '../modules/redux/badge';
import InputBoxWithX from './InputBoxWithX';
import { openModal } from '../../Modal/modules/redux/modal';
import useModal from '../../Modal/modules/useModal';
import { YYYYdotMM } from '../../modules/common/formatDate';

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

  const { content, started, ended } = useSelector(
    ({ badge }) => badge.activities[index],
  );

  const onClose = () => {
    dispatch(deleteList({ type: 'activities', index }));
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeIndexField({ type: 'activities', index, name, value }));
  };

  const { openModal } = useModal();

  const openCalendar = (contentType) => {
    openModal({ type: 'MonthModal', contentType, content: index });
  };

  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <InputBoxWithX
        name={'content'}
        placeholder={'내용을 입력해주세요.'}
        onChange={onChange}
        onClose={onClose}
        value={content}
      />
      <DateWrapper>
        <Dropdown
          className={'unselected'}
          onClick={() => {
            openCalendar('started');
          }}
        >
          <TextWarpper className={'unselected'}>
            {YYYYdotMM(started)}
          </TextWarpper>
          <FilterHandler className={'unselected'} />
        </Dropdown>
        <span> ~ </span>
        <Dropdown
          className={'unselected'}
          onClick={() => {
            openCalendar('ended');
          }}
        >
          <TextWarpper className={'unselected'}>{YYYYdotMM(ended)}</TextWarpper>
          <FilterHandler className={'unselected'} />
        </Dropdown>
      </DateWrapper>
    </div>
  );
};

export default ActivityInputItem;
