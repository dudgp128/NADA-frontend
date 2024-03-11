import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { NoticeContent } from '../components/NoticeContent';
import { useGetNoticeList } from '../modules/queries/useGetNotice';

const NoticePage = () => {
  const dispatch = useDispatch();
  const { data } = useGetNoticeList();
  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '공지사항',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <div className="pageContainer" style={{ gap: '0' }}>
      {data &&
        data.map((card) => (
          <Link
            to={`/myPage/notice/${card._id}`}
            key={card._id}
            style={{ textDecorationLine: 'none' }}
          >
            <NoticeContent key={card._id} data={card} />
          </Link>
        ))}
    </div>
  );
};

export default NoticePage;
