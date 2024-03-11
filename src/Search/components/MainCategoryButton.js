/**MainCategoryButton. 검색 페이지에서 mainCategory Modal을 open하는 버튼 */
import { useSelector } from 'react-redux';
import { searchSelector } from '../modules/redux/search';
import { applyFontStyles } from '../../styles/fontStyle';
import { FilterHandler } from '../../icon/FilterHandler';
import useModal from '../../Modal/modules/useModal';

export const MainCategoryButton = () => {
  const { openModal } = useModal();
  const { mainCategory } = useSelector(searchSelector);

  const MainCategoryStyle = {
    minWidth: '56px',
    height: '40px',
    backgroundColor: 'var(--myspec-gray-scalegray-200)',
    borderRadius: '10px  0px 0px 10px ',
    display: 'flex',
    boxSizing: 'border-box',
    padding: '7px 10px',
    gap: '4px',
    alignItems: 'center',
    ...applyFontStyles({
      font: 'body-01',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };

  const onClick = () => {
    openModal({ type: 'MainCategoryModal', position: 'search' });
  };

  return (
    <div style={MainCategoryStyle} onClick={() => onClick()}>
      {mainCategory}
      <FilterHandler isSmall={true} className="unselected" color={'black'} />
    </div>
  );
};
