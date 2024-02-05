/** CountComment 게시물 답글의 총 갯수를 반환하는 컴포넌트  */
import { useSelector } from 'react-redux';
import { postDataSelector } from '../../../modules/redux/postData';

const CountComment = () => {
  const data = useSelector(postDataSelector('data'));

  let totalComments = 0;

  if (data && data.comments) {
    totalComments = data.comments.reduce(
      (acc, comment) =>
        acc + comment.replies.length + (comment.isDeleted ? 0 : 1),
      0,
    );
  }

  return totalComments;
};

export default CountComment;
