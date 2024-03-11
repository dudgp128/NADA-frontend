import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useGetNotice } from '../modules/queries/useGetNotice';
import { DetailPost } from '../../Community/styles/PostDetailStyle';

const NoticeDetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { data, isLoading, isError } = useGetNotice({ _id: params._id });
  const [info, setInfo] = useState();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '세부 공지사항',
        isShowBottom: false,
      }),
    );
  }, []);

  useEffect(() => {
    if (isLoading || isError) {
      return;
    }
    setInfo(data);
  }, [data]);

  return (
    <div className="pageContainer" style={{ gap: '0' }}>
      {info && (
        <DetailPost>
          <div className="title">
            <div className="p">{info.title}</div>
          </div>
          <div className="content">
            <div className="text">{info.content} </div>
          </div>
        </DetailPost>
      )}
    </div>
  );
};

export default NoticeDetailPage;
