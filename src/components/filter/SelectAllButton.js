/** SelectAllButton  region, field, category 모달 내 전체를 아우르는 버튼 */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector, initializeForm } from '../../modules/redux/filter';
import { selectAllConfig } from '../../modules/common/AttributeData';
import { AttributeInfoButton } from '../common/AttributeInfoButton';

export const SelectAllButton = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const content = useSelector(filterSelector('buttonSelect', 'filter'));
  const selectAll = selectAllConfig(content);
  const state = useSelector(filterSelector('subButtonSelect', content));

  const onClick = () => {
    if (!state.includes(selectAll)) {
      dispatch(initializeForm({ form: 'subButtonSelect', key: content }));
    }
  };

  useEffect(() => {
    setIsActive(state.includes(selectAll));
  }, [state]);

  return (
    <AttributeInfoButton
      text={selectAll}
      onClick={onClick}
      isActive={isActive}
    />
  );
};
