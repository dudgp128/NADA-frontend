/** Filter 메인페이지에서 필터를 관리하는 컨테이너 */
import styled from 'styled-components';
import { DropDown } from './Dropdown';
import { useSelector } from 'react-redux';
import { filterSelector } from '../../../modules/redux/filter';
import { FilterItems } from './FilterItems';

const Filter = ({ position }) => {
  //특정 필터버튼이 활성화 상태라면 해당 필터에 따른 내용을 FilterItems를 통해 출력
  const isOpen = useSelector(filterSelector('buttonSelect', 'filter'));

  return (
    <>
      <Filterlist>
        <DropDown content="region" text="지역" />
        <DropDown content="field" text="분야" />
        <DropDown content="category" text="종류" />
      </Filterlist>
      {isOpen && <FilterItems text={isOpen} position={position} />}
    </>
  );
};

export default Filter;

const Filterlist = styled.div`
  height: fit-content;
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;

  & > .view {
    flex: 0 0 auto !important;
  }
  & > .drop-down-instance {
    height: 6px !important;
    margin-right: unset !important;
    width: 12px !important;
  }
`;
