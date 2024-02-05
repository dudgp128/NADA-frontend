/** Content 알람 페이지에 Content를 출력하는 컴포넌트  */
import { styled } from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';
import { BellSvg } from '../../icon/BellSvg';

export const Content = ({ notCheck }) => {
  return (
    <ContentStyle className={notCheck ? 'notCheck' : ''}>
      <div className="content">
        <BellSvg />
        <div className="text">
          <div className="title">~에 댓글이 달렸어요</div>
          <div className="content">어쩌구 저쩌구</div>
          <div className="time">n분 전</div>
        </div>
      </div>
      <div className="notCheck" />
      {notCheck && <div className="ellipse" />}
    </ContentStyle>
  );
};

export const ContentStyle = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex: 0 0 auto;
  flex-wrap: wrap;
  height: 90px;
  padding: 13px 15px;
  box-sizing: border-box;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: var(--myspec-gray-scalegray-200);

  &.notCheck {
    background-color: #f5faff;
  }
  & > .content {
    display: flex;
    gap: 8px;

    & > .text {
      display: flex;
      flex-direction: column;
      gap: 3px;
      & > .title {
        ${applyFontStyles({
          font: 'subtitle-03',
          color: 'var(--myspec-gray-scalegray-900)',
        })};
      }
      & > .content {
        ${applyFontStyles({
          font: 'body-01',
          color: 'var(--myspec-gray-scalegray-900)',
        })};
      }
      & > .time {
        ${applyFontStyles({
          font: 'caption-03',
          color: 'var(--myspec-gray-scalegray-600)',
        })};
      }
    }
  }

  & > .ellipse {
    width: 5px;
    height: 5px;
    background-color: #0ce39d;
    border-radius: 50%;
  }
`;
