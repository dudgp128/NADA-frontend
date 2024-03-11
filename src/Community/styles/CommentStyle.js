import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const ProfileStyle = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 12px;
  position: relative;
  text-align: left;

  & > .image {
    background-color: var(--myspec-gray-scalegray-300);
    border-radius: 30px;
    height: 32px;
    position: relative;
    width: 32px;
  }

  & > .name-date {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 0 0 auto;

    & > .name {
      ${applyFontStyles({
        font: 'caption-02',
        color: 'var(--myspec-gray-scalegray-900)',
      })};
      margin-top: -1px;
      position: relative;
      width: 136px;
    }
    & > .line {
      display: flex;
      flex-direction: row;
      gap: 2px;

      & > .date {
        ${applyFontStyles({
          font: 'caption-03',
          color: 'var(--myspec-gray-scalegray-900)',
        })};
        position: relative;
        display: flex;
      }
      & > .update {
        ${applyFontStyles({
          font: 'caption-03',
          color: 'var(--myspec-primaryblue-1)',
        })};
        position: relative;
        width: 136px;
      }
    }
  }
`;

export const MenuStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 0 0 auto;
  gap: 10px;
  padding: 8px;
  position: relative;
  margin-left: auto;

  & > .meatball {
    display: flex;
    flex-direction: column;
    height: 16px;
    position: relative;
    width: 4px;
    gap: 2px;

    & > .ellipse {
      background-color: var(--myspec-gray-scalegray-600);
      border-radius: 2px;
      height: 4px;
      position: relative;
      width: 4px;
    }
  }
`;

const commonLikesReplyStyle = `
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;
`;

export const CommentList = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  text-align: left;
  padding-top: 85px;
  padding-bottom: 85px;
`;

export const LikeStyle = styled.div`
  ${commonLikesReplyStyle}
  gap: 4px;

  & > .like {
    gap: 6px;

    & > .text {
      ${applyFontStyles({
        font: 'body-01',
        color: 'var(--myspec-gray-scalegray-900)',
      })};

      margin-top: -1px;
      width: 56px;
    }
  }
`;

export const ReplyStyle = styled.div`
  ${commonLikesReplyStyle}
  gap: 8px;
  margin-left: auto;

  & > .text {
    ${applyFontStyles({
      font: 'caption-02',
      color: 'var(--myspec-gray-scalegray-900)',
    })};
    margin-top: -1px;
    width: fit-content;
  }
`;

export const CommendBox = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  flex: 0 0 auto;
  align-items: flex-start;
  background-color: var(--myspec-gray-scalewhite);
  border-bottom: 1px solid var(--myspec-gray-scalegray-200);
  gap: 8px;

  & > .header {
    display: flex;
    flex-direction: row;
  }

  & > .content {
    ${applyFontStyles({
      font: 'body-01',
      color: 'var(--myspec-gray-scalegray-900)',
    })};
    position: relative;
  }

  & > .bottom {
    display: flex;
    flex-direction: row;
    ${commonLikesReplyStyle}
  }
`;

export const CommentBox = styled(CommendBox)`
  padding: 16px 15px;

  & > .header {
    width: 345px;
  }

  & > .content {
    width: 345px;
  }

  & > .bottom {
    width: 345px;
  }
`;

export const ReplyBox = styled(CommendBox)`
  padding: 16px 15px 16px 40px;

  & > .header {
    width: 320px;
  }

  & > .content {
    width: 320px;
  }

  & > .bottom {
    width: 320px;
  }
`;
