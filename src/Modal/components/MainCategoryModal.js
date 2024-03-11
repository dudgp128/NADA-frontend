/** MainCategoryModal postWrite 중 카테고리 button 클릭 시 나오는 모달 */
import { useState } from 'react';
import useModal from '../modules/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { postWriteSelector, changeField } from '../../modules/redux/postWrite';
import {
  ListMain,
  Border,
  MainCategory,
  TextWrapper,
  Img,
} from '../styles/ModalStyle';
import BottomButton from './usedInModal/BottomButton';
import { ModalPropsSelector } from '../modules/redux/modal';
import { changeField as changeSearch } from '../../Search/modules/redux/search';
import { searchSelector } from '../../Search/modules/redux/search';

const MainCategoryModal = () => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const position = useSelector(ModalPropsSelector('position'));
  const { mainCategory } = useSelector(searchSelector);
  const postMaincategory = useSelector(
    postWriteSelector('postWriteSubmit', 'mainCategory'),
  );
  //postWriteSubit값으로 nowClick 초기화
  const [nowClick, setNowClick] = useState(
    position === 'search' ? mainCategory : postMaincategory,
  );
  //현재 선택된 값이 바뀔 때마다 select 리덕스 값을 업데이트
  const onClick = (nowClick) => {
    setNowClick(nowClick);
  };

  const output = (text, status) => {
    const active = status === nowClick;
    return (
      <div
        style={MainCategory}
        onClick={() => {
          onClick(status);
        }}
      >
        <div style={TextWrapper}>{text}</div>
        <Img className={active ? 'active vector' : 'vector'} />
      </div>
    );
  };

  const cancels = () => {
    closeModal();
  };

  const setStatus = () => {
    if (position === 'search') {
      dispatch(
        changeSearch({
          key: 'mainCategory',
          value: nowClick,
        }),
      );
    } else {
      dispatch(
        changeField({
          form: 'postWriteSubmit',
          key: 'mainCategory',
          value: nowClick,
        }),
      );

      if (!(nowClick === '카테고리')) {
        dispatch(
          changeField({
            form: 'ButtonActive',
            key: 'mainCategory',
            value: true,
          }),
        );
      }
    }
    closeModal();
  };

  return (
    <div>
      <div style={ListMain}>
        {output('모집 게시판', '모집')}
        {output('홍보 게시판', '홍보')}
        {output('자유 게시판', '자유')}
      </div>
      <div style={Border} />
      {BottomButton({
        cancel: cancels,
        actText: '확인',
        act: setStatus,
        isRed: false,
      })}
    </div>
  );
};

export default MainCategoryModal;
