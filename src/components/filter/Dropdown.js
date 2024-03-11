/** Dropdown community 메인 페이지의 filter 컴포넌트 */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector, changeField } from '../../modules/redux/filter';
import { Dropdown, TextWarpper } from '../../Community/styles/DropdownStyle';
import { selectAllConfig } from '../../modules/common/AttributeData';
import { FilterHandler } from '../../icon/FilterHandler';

export const DropDown = ({ content, text }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState('unselected');
  const selectAll = selectAllConfig(content);

  //해당 dropDown이 표현하는 region/field/category 의 선택값 불러오기
  const select = useSelector(filterSelector('subButtonSelect', content));
  const closeState = selectAll === select[0] ? 'unselected' : 'selected';
  //현재 community 메인페이지에서 클린된 filter의 이름 불러오기
  const isOpen = useSelector(filterSelector('buttonSelect', 'filter'));
  const maincategory = useSelector(
    filterSelector('buttonSelect', 'maincategory'),
  );

  // filter_A버튼이 열려있는 상태로 filter_B버튼이 클릭되면 filter_A버튼은 닫기
  useEffect(() => {
    if (state === 'opened' && content !== isOpen) {
      setState(closeState);
    }
    //state === "selected" && isOpen === undefined && setState(closeState); 보류코드
  }, [isOpen]);

  useEffect(() => {
    setState('unselected');
  }, [maincategory]);

  // 활성화된 filter 버튼을 클릭했다면 비활성화, 비활성화된 filter를 눌렀다면 활성화
  const onClick = () => {
    const nextState = isOpen === content ? closeState : 'opened';
    dispatch(
      changeField({
        form: 'buttonSelect',
        key: 'filter',
        value: nextState === 'opened' ? content : '',
      }),
    );
    setState(nextState);
  };

  return (
    <Dropdown
      className={state}
      onClick={() => {
        onClick();
      }}
    >
      <TextWarpper className={state}>{text}</TextWarpper>
      <FilterHandler className={state} />
    </Dropdown>
  );
};

DropDown.propTypes = {
  type: PropTypes.oneOf(['unselected', 'selected', 'opened']),
  text: PropTypes.string,
};
