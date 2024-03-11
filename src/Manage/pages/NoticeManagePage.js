import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LayoutStyle } from './HomePage.';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import Header from '../containers/Header';

const NoticeManagePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <LayoutStyle>
      <Header text={'공지사항 게시글'} url={'/manage/notice/write'} />
    </LayoutStyle>
  );
};

export default NoticeManagePage;
