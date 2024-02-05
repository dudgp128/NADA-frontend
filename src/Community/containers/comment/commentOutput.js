import { useDispatch } from 'react-redux';
import { CommentBox } from '../../styles/CommentStyle';
import { changeField } from '../../modules/redux/comment';
import ReplyOutPut from './replyOutput';
import useModal from '../../../Modal/modules/useModal';
import { Profile } from '../../components/comment/Profile';
import { Menu } from '../../components/comment/Menu';
import Content from '../../components/comment/Content';
import { Reply } from '../../components/comment/Reply';

const CommentOutPut = ({ comment }) => {
  const dispatch = useDispatch();
  const { openModal } = useModal();

  // 댓글 메뉴 열기
  const openMenu = () => {
    dispatch(changeField({ form: 'comment_id', value: comment._id }));
    dispatch(changeField({ form: 'content', value: comment.content }));
    openModal({
      type: 'MenuModal',
      contentType: '댓글',
      content: ['Copy', 'Update', 'Delete', 'Report'],
      position: 'comment',
    });
  };

  return (
    <div>
      {!(comment.isDeleted && !comment.replies.length) && (
        <CommentBox>
          <div className="header">
            <Profile comment={comment} />
            {!comment.isDeleted && <Menu openMenu={openMenu} />}
          </div>
          <Content comment={comment} />
          {!comment.isDeleted && (
            <div className="bottom">
              <Reply comment={comment} />
            </div>
          )}
        </CommentBox>
      )}
      {comment.replies.map((reply, index) => (
        <div key={index}>{ReplyOutPut({ comment, reply })}</div>
      ))}
    </div>
  );
};

export default CommentOutPut;
