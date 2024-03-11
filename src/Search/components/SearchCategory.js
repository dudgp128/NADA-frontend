/**SearchCategory. 검색 중  카테고리를 설정하는 컴포넌트  */
import styled from 'styled-components';
import { body_02 } from '../../styles/fontStyle';
import { useDispatch } from 'react-redux';
import { changeField } from '../modules/redux/search';

// badge에서도 사용하는 컴포넌트
export const SpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${body_02('var(--myspec-gray-scalegray-600)')}

  & > .searchFocus {
    flex-grow: 1;
    height: calc(44px - 24px);
    padding: 12px 0px;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--myspec-gray-scale-gray-400, #d9d9d9);
    text-align: center;

    &.focus {
      ${body_02('var(--myspec-gray-scalegray-900)')}
      border-bottom: 2px solid var(--myspec-primary-blue-1, #1363ff);
    }
  }
`;

export const SearchCategory = ({ list, focus }) => {
  const dispatch = useDispatch();
  const onClick = (e) => {
    e.preventDefault();
    dispatch(changeField({ key: 'focus', value: e.target.innerText }));
  };

  return (
    <SpaceBetween>
      {list.map((el) => (
        <div
          className={`searchFocus${el === focus ? ' focus' : ''}`}
          key={el}
          onClick={onClick}
        >
          {el}
        </div>
      ))}
    </SpaceBetween>
  );
};
