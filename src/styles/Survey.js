import styled from 'styled-components';
import { applyFontStyles } from './fontStyle';

// -------------------------- LoginPage.js

export const LoginBox = styled.div`
  background-color: #ffffff;
  border: 1px none;
  width: 375px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  justify-content: space-evenly;

  & > svg {
    display: flex;
    margin: 0 auto;
    position: relative;
  }
`;

// ---------------------------AuthForm.js

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > input,
  textarea,
  .inputWrapper input {
    ${applyFontStyles({
      font: 'body-01',
      color: 'var(--myspec-gray-scalegray-600)',
    })}
    border-radius: 10px;
    background: var(--myspec-gray-scalegray-200, #f2f2f2);
    padding: 12px 11px;
    align-items: center;
    flex-shrink: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    width: 100%;
    height: fit-content;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  text-align: center;
  border: none;
  padding: 0;
  width: 100%;
  height: fit-content;
  align-self: end;

  &:disabled {
    opacity: 0.3;
  }

  & > a,
  div {
    width: 100%;
    padding: 20px 0;
    border-radius: 10px;
    ${applyFontStyles({ font: 'subtitle-01', color: '#fff' })}
    text-decoration: none;

    &:nth-child(1) {
      background: var(--myspec-primaryblue-1, #1363ff);
    }

    &:nth-child(2) {
      background: var(--myspec-gray-scalegray-600);
    }
  }
`;

// -------------- LoginFooter

export const FooterWrapper = styled.div`
  display: flex;
  gap: ${(props) => `${props.$gap}px`};
  ${applyFontStyles({
    font: 'body-01',
  })}
  justify-content: center;
  padding-top: 16px;

  & > div {
    align-items: center;
    display: flex;
    gap: 8px;
    justify-content: center;

    & > a {
      text-decoration: none;
      color: #000;
    }
  }

  & > .LoginBtn {
    width: 100%;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
  }
`;

//  ----------------- RegisterForm.js

export const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 375px;
  margin: 0px auto;
  gap: 24px;
  text-align: left;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;

  & > .backBtnWrapper {
    padding: 17px 8px 8px 0px;
    width: fit-content;
  }
`;

export const ErrorMessage = styled.div`
  ${applyFontStyles({ font: 'body-02' })}
  margin-top: -1px;
  position: relative;
  width: fit-content;
`;

export const TitleBox = styled.h1`
  text-align: left;
  color: #000000;
  font-family: 'Pretendard-Bold', Helvetica;
  font-size: 24px;
  font-weight: 700;
  height: fit-content;
  letter-spacing: 0;
  line-height: 36px;
  margin: 0;
`;

export const Explain = styled.div`
  text-align: left;
  ${applyFontStyles({
    font: 'body-02',
    color: 'var(--myspec-gray-scalegray-600)',
  })}
  padding : 8px 0px;
`;

// ---------------------BadgeWrite.js
export const CenterGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: min-content 1fr 115px;
  justify-content: space-between;
  width: 375px;
  height: calc(100vh - (88px + 79px)); // 상단바 + ( 뒤로가기 , indicator 높이)
  margin: 0px auto;
  gap: 24px;
  text-align: left;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
`;

export const TextWithSvg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${applyFontStyles({ font: 'subtitle-01' })}
  padding: 13px;
  border-radius: 20px;
  background: var(--myspec-gray-scalegray-100, #f8f8f8);
  box-sizing: border-box;
  height: fit-content;
`;
