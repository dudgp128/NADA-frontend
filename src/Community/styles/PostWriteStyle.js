import { styled, css } from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const TitleStyle = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 10px 10px;
  padding: 12px 15px;
  box-sizing: border-box;
  position: relative;

  & > .div {
    margin-top: -1px;
    position: relative;
    width: 345px;
    border: none;
    ${applyFontStyles({
      font: 'title-02',
      color: 'var(--myspec-gray-scalegray-900)',
    })};
    &::placeholder {
      ${applyFontStyles({
        font: 'title-02',
        color: 'var(--myspec-gray-scalegray-400)',
      })};
    }
  }
  & > .div:focus {
    outline: none;
  }
`;

export const Frame = styled.div`
  align-items: flex-start;
  background-color: var(--myspec-gray-scalewhite);
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  padding: 12px 15px;
  box-sizing: border-box;
  position: relative;
`;

const inputStyles = css`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  border: none;
  padding: 6px 8px;
  border-radius: 6px;
  background: var(--myspec-gray-scalegray-100);
  ${applyFontStyles({
    font: 'caption-02',
    color: 'var(--myspec-gray-scalegray-900)',
  })};
  &::placeholder {
    ${applyFontStyles({
      font: 'caption-02',
      color: 'var(--myspec-gray-scalegray-400)',
    })};
  }
  &:focus {
    outline-width: 0;
  }
`;

export const TextInput = styled.div`
  .box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    ${applyFontStyles({
      font: 'subtitle-03',
      color: 'var(--myspec-gray-scalegray-600)',
    })};

    .inputBox {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
      ${applyFontStyles({
        font: 'caption-02',
        color: 'var(--myspec-gray-scalegray-600)',
      })};

      &.flex {
        flex-direction: column;
      }

      .date {
        ${applyFontStyles({
          font: 'caption-02',
          color: 'var(--myspec-gray-scalegray-900)',
        })};
        cursor: pointer;
      }

      input {
        ${inputStyles}
      }

      .urlBox {
        display: flex;
        align-items: center;
        ${inputStyles}
        gap: 4px;

        input {
          padding: 0;
          background-color: inherit;
        }

        & > .isActive {
          ${applyFontStyles({
            font: 'caption-02',
            color: 'var(--myspec-primaryblue-1)',
          })};
        }
      }
    }
  }
`;

export const ContentStyle = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  height: 466px;
  padding: 12px 15px;
  position: relative;

  & > .text {
    ${applyFontStyles({
      font: 'body-01',
      color: 'var(--myspec-gray-scalegray-900)',
    })};
    margin-top: -1px;
    position: relative;
    width: 345px;
    height: 466px;
    word-wrap: break-word;
    border: none;

    &::placeholder {
      ${applyFontStyles({
        font: 'body-01',
        color: 'var(--myspec-gray-scalegray-400)',
      })};
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Images = styled.div`
  position: relative;
  height: 96px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const PreViewImg = styled.div`
  position: relative;

  & > .img {
    width: 72px;
    height: 72px;
    border-radius: 10px;
    background-size: cover;
    background-image: ${({ imgurl }) => `url('${imgurl}')`};
  }
  & > .gradient {
    position: absolute;
    width: 72px;
    height: 72px;
    top: 0px;
    border-radius: 10px;
    background: linear-gradient(180deg, #000000a9 0%, transparent 100%);
  }
  & > .xImg {
    position: absolute;
    left: 53px;
    top: 2px;
  }gradient
`;
