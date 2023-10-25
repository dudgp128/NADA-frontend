import styled from "styled-components";
import { DropDown } from "./Dropdown";
import { useSelector } from "react-redux";
import { communitySelector } from "../module/CommunityStatus";
import { FilterItems } from "./FilterItems";

const Filter = () => {
  const isOpen = useSelector(communitySelector("buttonSelect", "filter"));

  return (
    <div>
      <Filterlist>
        <DropDown text="지역" id={0} />
        <DropDown text="분야" id={1} />
        <DropDown text="종류" id={2} />
      </Filterlist>
      {isOpen && <FilterItems text={isOpen} />}
    </div>
  );
};

export default Filter;

const Filterlist = styled.div`
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
