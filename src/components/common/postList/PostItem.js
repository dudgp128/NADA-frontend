/** PostItem, postList을 이루는 PostItem. */
import { PostContainer } from '../../../Community/styles/postItemStyle';
import GetElapsedTime from '../../../modules/common/getElapsedTime';

const PostItem = ({ card }) => {
  const { title, field, category, region, content, registeredAt, imageUrl } =
    card;

  const DetailText = ({ text, isLast }) => {
    return (
      <>
        <text className="text-2">
          {text} {!isLast && <>,</>}
        </text>
      </>
    );
  };

  return (
    <PostContainer imgurl={imageUrl}>
      <div className="image" />
      <div className="innerBox">
        <div className="title">{title}</div>
        <div className="text">{content}</div>
        <div className="frame">
          <div className="nowrap">
            {region.map((text, index) => (
              <DetailText
                key={index}
                text={text}
                isLast={index === region.length - 1}
              />
            ))}
          </div>
          <div className="ellipse" />
          <div className="nowrap">
            {field.map((text, index) => (
              <DetailText
                key={index}
                text={text}
                isLast={index === field.length - 1}
              />
            ))}
          </div>
          <div className="ellipse" />
          <div className="nowrap">
            <text className="text-2">{category}</text>
          </div>
          <div className="ellipse" />
          <div className="nowrap">
            <text className="text-2">
              <GetElapsedTime registeredAt={registeredAt} />
            </text>
          </div>
        </div>
      </div>
    </PostContainer>
  );
};

export default PostItem;
