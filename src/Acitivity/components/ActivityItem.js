import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';
import { Link } from 'react-router-dom';
import imgNull from '../../icon/GrayLogo.png';

const Title = styled.p`
  ${applyFontStyles({ font: 'subtitle-01' })};
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  position: relative;
  box-sizing: border-box;
  height: 51px;
  width: 171px;
  margin: 0;
  padding: 4px 2px;
`;

const ImgContainer = styled.div`
  background-image: ${(props) => {
    return `url(
      ${props.$imgsrc ? props.$imgsrc : imgNull})`;
  }};
  border-radius: 10px;
  background-size: 100% 100%;
  aspect-ratio: 1 / 1;
  position: relative;
`;

const Dday = styled.div`
  ${applyFontStyles({
    font: 'caption-01',
    color: 'white',
  })}
  box-sizing: border-box;
  padding: 6px 8px;
  height: 26px;
  margin: 10px;
  float: right;
  min-width: 41px;
  text-align: center;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);

  &.active {
    background: var(--myspec-primaryblue-1);
  }
`;

const ActivityItem = ({ cards, style }) => {
  const CardContainerStyle = {
    borderRadius: '10px',
    position: 'relative',
    maxWidth: '169px',
    textAlign: 'left',
    textDecoration: 'none',
    ...style,
  };

  const transNumber = (value) => {
    return parseInt(value.replace(/[^\d-]/g, ''), 10);
  };

  const CardWrapper = (card) => {
    return (
      <Link
        style={{ style, textDecorationLine: 'none' }}
        key={card.idx}
        to={`/activity/DetailActivity/${card._id}`}
      >
        <ImgContainer $imgsrc={card.mainImageUrl}>
          <Dday
            className={
              transNumber(card.Dday) >= -14 && transNumber(card.Dday) <= 0
                ? 'active'
                : null
            }
          >{`D ${card.Dday}`}</Dday>
        </ImgContainer>
        <Title>{card.activityName}</Title>
      </Link>
    );
  };

  return (
    <>
      {Array.isArray(cards)
        ? cards.length &&
          cards.map((card, idx) => (
            <div style={CardContainerStyle} key={idx}>
              {CardWrapper(card)}
            </div>
          ))
        : cards && CardWrapper(cards)}
    </>
  );
};

export default ActivityItem;
