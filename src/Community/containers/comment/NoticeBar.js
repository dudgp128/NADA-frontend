/** NoticeBar 수정 중임을 알려주는 알림창 */
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { initializeForm } from '../../modules/redux/comment';
import { applyFontStyles } from '../../../styles/fontStyle';

const NoticeBar = ({ name, isReply }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(initializeForm());
  };

  const IsReplying = () => {
    return (
      <>
        <div className="name">@{name}</div>
        <div className="content">님에게 답글 남기는 중</div>
      </>
    );
  };

  const IsUpdating = () => {
    return <div className="content">댓글을 수정하는 중</div>;
  };

  return (
    <Bar>
      <div className="text">{isReply ? <IsReplying /> : <IsUpdating />}</div>
      <div className="img" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="none"
        >
          <path
            stroke="#888"
            strokeWidth="1.01015"
            d="M12.89 4 4 13m9 0L4.11 4"
          />
        </svg>
      </div>
    </Bar>
  );
};

export default NoticeBar;

const Bar = styled.div`
  height: 18px;
  position: relative;
  width: 345px;

  & > .text {
    align-items: center;
    display: inline-flex;
    gap: 4px;
    left: 0;
    position: absolute;
    top: 0;

    & > .name {
      ${applyFontStyles({
        font: 'caption-02',
        color: 'var(--myspec-primaryblue-1)',
      })};
      margin-top: -1px;
      position: relative;
      white-space: nowrap;
      width: fit-content;
    }
    & > .content {
      ${applyFontStyles({
        font: 'caption-02',
        color: 'var(--myspec-gray-scalegray-600)',
      })};
      margin-top: -1px;
      position: relative;
      white-space: nowrap;
      width: fit-content;
    }
  }
  & > .img {
    height: 17px;
    left: 328px;
    position: absolute;
    top: 1px;
    width: 17px;
  }
`;
