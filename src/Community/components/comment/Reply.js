/** Reply 답장 컴포넌트  */
import { useDispatch } from 'react-redux';
import { changeField } from '../../modules/redux/comment';
import { ReplyStyle } from '../../styles/CommentStyle';

export const Reply = ({ comment }) => {
  const dispatch = useDispatch();
  const sendComment = () => {
    dispatch(changeField({ form: 'position', value: 'reply' }));
    dispatch(changeField({ form: 'comment_id', value: comment._id }));
    dispatch(changeField({ form: 'userName', value: comment.userName }));
    dispatch(changeField({ form: 'isReplying', value: true }));
    dispatch(changeField({ form: 'isUpdating', value: false }));
  };

  return (
    <ReplyStyle onClick={sendComment}>
      <img
        className="reply"
        alt="Reply"
        src="https://c.animaapp.com/FZc9bisJ/img/reply-4.svg"
      />
      <div className="text">답글 달기</div>
    </ReplyStyle>
  );
};
