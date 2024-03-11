import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useGetMyPost } from '../modules/queries/useGetMyPost';
import PostList from '../../components/postList/PostList';
import { Contents } from '../../Community/styles/CommunityStyle';

const MyPostPage = () => {
  const dispatch = useDispatch();
  const result = useGetMyPost({ email: `maintest01@gmail.com` });
  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '내가 작성한 글 ',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <div className="pageContainer" style={{ gap: '0' }}>
      <Contents>
        <div className="content">
          <PostList type={'community'} result={result} />
        </div>
      </Contents>
    </div>
  );
};

export default MyPostPage;
