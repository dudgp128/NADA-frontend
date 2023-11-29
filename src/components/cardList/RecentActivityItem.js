import styled from 'styled-components';
import { subtitle_03, caption_02, caption_01 } from '../../styles/fontStyle';
import { Star } from '../activity/Star';

const CardContainer = styled.div`
  min-width: 184px;
  height: 94px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  position: relative;

  & > div {
    width: 160px;
    position: relative;
    left: 14px;
    top: 10px;
    text-align: left;

    & > .title {
      ${subtitle_03('var(--myspec-gray-scalegray-900)')}
      height: 21px;
      position: relative;
    }

    & > .team {
      ${caption_02('var(--myspec-primaryblue-1)')}
      height: 14px;
      position: relative;
      top: 4px;
      width: calc(100% - (16px + 14px));
    }

    & > .group {
      height: 24px;
      position: relative;
      top: 14px;
      display: flex;
      width: fit-content;

      & > .Dday {
        ${caption_01('var(--myspec-gray-scalegray-900)')}
        height: 17px;
        position: relative;
        align-self: center;
      }

      & > .see {
        ${caption_01('var(--myspec-gray-scalegray-600)')}
        height: 17px;
        position: relative;
        left: 4px;
        align-self: center;
      }
    }

    & > .star {
      position: absolute;
      top: 48px;
      left: calc(100% - 25px);
    }
  }
`;

const RecentActivityItem = ({ cards }) => {
  return (
    <>
      {cards.map(({ title, team, Dday, see }) => (
        <CardContainer>
          <div>
            <div className="title">{title}</div>
            <div className="team">{team}</div>
            <div className="group">
              <div className="Dday">D-{Dday}</div>
              <div className="see">조회 {see}</div>
            </div>
            <div className="star">
              <Star />
            </div>
          </div>
        </CardContainer>
      ))}
    </>
  );
};

export default RecentActivityItem;
