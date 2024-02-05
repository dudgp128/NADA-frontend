import styled from 'styled-components';
import { subtitle_03, body_01 } from '../../styles/fontStyle';
import { AngleBracket } from '../../icon/AngleBracket';

const DetailContent = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  padding: 16px 15px 12px 15px;

  & > div > :nth-child(1) {
    ${subtitle_03('#1A1A1A')}
  }

  & > div > :nth-child(2) {
    width: 255px;
    ${body_01('#1A1A1A')};
  }
  & .row {
    ${body_01('#1A1A1A')};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    & > .gray {
      ${body_01('#888888')};
    }
  }
`;

const ContentContainer = ({ info }) => {
  const { startedAt, endedAt, institute, instituteURL, area } = info;

  const formatDate = (start, end) => {
    let startDate = new Date(start);
    let endDate = new Date(end);
    return `${startDate.getFullYear()}년${
      startDate.getMonth() + 1
    }월 ${startDate.getDate()}일(${startDate.toLocaleDateString('ko-KR', {
      weekday: 'short',
    })}) ~ ${startDate.getFullYear()}년${
      endDate.getMonth() + 1
    }월 ${endDate.getDate()}일(${endDate.toLocaleDateString('ko-KR', {
      weekday: 'short',
    })})`;
  };
  return (
    <>
      <DetailContent>
        <div className="duration">
          <div>접수기간</div>
          <div>{formatDate(startedAt, endedAt)}</div>
        </div>
        <div className="team">
          <div>기관</div>
          <div className="row">
            <div className="gray">주최</div>
            <div>{institute}</div>
            {instituteURL && (
              <AngleBracket
                Direction="right"
                color="#888"
                onClick={() => {
                  window.open(instituteURL);
                }}
              />
            )}
          </div>
        </div>
        <div className="place">
          <div>장소</div>
          <div>{area}</div>
        </div>
      </DetailContent>
    </>
  );
};

export default ContentContainer;
