/**PostList 커뮤니티 게시물 리스트가 나오는 컨테이너 */
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import { ErrorMessage } from '../../containers/common/ErrorMessage';
const PostList = ({ type, result }) => {
  const { data, isLoading, isError } = result;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  const path = {
    activity: 'DetailActivity',
    community: 'PostDetail',
  };

  return (
    <div>
      {data &&
        data.map((card) => (
          <Link to={`/${type}/${path[type]}/${card._id}`} key={card._id}>
            <PostItem key={card._id} card={card} />
          </Link>
        ))}
    </div>
  );
};

export default PostList;
