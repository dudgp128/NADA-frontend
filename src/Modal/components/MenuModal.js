/** MenuModal 메뉴 클릭 시, 여러가지 행동 리스트가 나오는 모달 */
import { useSelector } from 'react-redux';
import BottomButton from './usedInModal/BottomButton';
import { MenuTypeConfig } from '../modules/menuModalType';
import { List, Border, Layout } from '../../Community/styles/BarModalStyle';

export const MenuModal = () => {
  const modal = useSelector(({ modal }) => modal);
  const { content } = modal;

  return (
    <div style={Layout}>
      <div style={List}>
        {content.map((content, index) => {
          return <div key={index}>{MenuTypeConfig(content)}</div>;
        })}
      </div>
      <div style={Border} />
      <BottomButton cancelText={'닫기'} />
    </div>
  );
};

export default MenuModal;
