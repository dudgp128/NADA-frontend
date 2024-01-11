/** CommentPage 댑글과 답글을 보여주는 페이지 */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetComment } from '../../modules/queries/community/useGetComment';
import styled from 'styled-components';
import CommentOutPut from '../../components/community/comment/commentOutput';
import { CommentList } from '../../styles/community/CommentStyle';
import { BottomBar } from '../../containers/community/comment/BottomBar';
import { changeBarStatus } from '../../modules/redux/bar';
import { applyFontStyles } from '../../styles/fontStyle';
import { changePostDetailField } from '../../modules/redux/community/postDetail';

const CommentPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { data, isLoading, isError } = useGetComment({ _id: params._id });
  const [comments, setComments] = useState([]);

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '댓글',
        isShowBottom: false,
      }),
    );
  }, []);

  useEffect(() => {
    if (isLoading || isError) {
      return;
    }
    dispatch(changePostDetailField({ value: { _id: params._id } }));
    setComments(data.comments);
  }, [data, isLoading, isError]);

  return (
    <div>
      {!comments.length && <Message>댓글을 남겨보세요</Message>}
      <CommentList>
        {comments.map((comment) => (
          <CommentOutPut key={comment._id} comment={comment} />
        ))}
      </CommentList>
      <BottomBar />
    </div>
  );
};

export default CommentPage;

export const Message = styled.div`
  ${applyFontStyles({
    font: 'body-01',
    color: 'var(--myspec-gray-scalegray-600)',
  })};
  position: relative;
  width: 104px;
  height: 21px;
  top: 308px;
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0);
`;
