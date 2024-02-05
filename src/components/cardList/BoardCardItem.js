import styled from 'styled-components';
import { caption_01, caption_02 } from '../../styles/fontStyle';
import { Link } from 'react-router-dom';

const CardContainer = styled(Link)`
  background-color: var(--myspec-gray-scalegray-100);
  border-radius: 10px;
  height: 148px;
  overflow: hidden;
  position: relative;
  width: 120px;
  text-align: left;
  text-decoration: none;

  & > .image-2 {
    background-image: ${(props) => {
      return `url(
      ${props.$imgSrc ? props.$imgSrc : 'https://generation-sessions.s3.amazonaws.com/34294950d7167123fb2eefcf02c0f744/img/image-2@2x.png'})`;
    }};
    background-position: 50% 50%;
    background-size: cover;
    height: 88px;
    position: relative;
    width: 120px;
  }

  & > .category {
    ${caption_01('var(--myspec-primaryblue-1)')}
    left: 12px;
    position: relative;
    margin-top: 8px;
  }

  & > .title {
    ${caption_02('#000000')}
    height: 18px;
    position: relative;
    margin-top: 5px;
    width: 96px;
    padding: 0px 12px;
  }
`;

const BoardCardItem = ({ cards }) => {
  return (
    <>
      {cards.map(({ _id, title, category, imageUrl }, idx) => (
        <CardContainer
          key={idx}
          to={`/community/PostDetail/${_id}`}
          $imgSrc={imageUrl}
        >
          <div className="image-2" />
          <div className="category">{category}</div>
          <div className="title">{title}</div>
        </CardContainer>
      ))}
    </>
  );
};

export default BoardCardItem;
