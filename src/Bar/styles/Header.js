/*Header 하단 네비게이션 바의 styled components */
import styled from 'styled-components';
import BellImg from '../../icon/bell.png';
import { applyFontStyles } from '../../styles/fontStyle';

export const Top = styled.div`
  height: 88px;
  position: relative;
  width: 375px;
  margin: 0 auto;
`;

//커뮤니티의 '게시'버튼 추가 설정
export const Overlap = styled.div`
  height: 22px;
  left: 3px;
  position: absolute;
  width: 21px;

  & > .Post {
    ${applyFontStyles({
      font: 'title-02',
      color: 'var(--myspec-primaryblue-1)',
    })};
    position: absolute;
    height: 27px;
    left: 325px;
    top: 50px;
    width: 32px;
    padding-inline: 0px;
    border-width: 0px;
    background-color: white;
  }
`;

//상단 네비게이션의 이미지 설정
export const Img = styled.div`
  height: 20px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 18px;
  background-size: 100%;
  outline: none;

  &.Logo {
    background-image: url('https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/-----1.svg');
    height: 20px;
    left: 15px;
    top: 53px;
    width: 110px;
  }
  &.Back {
    background-image: url('https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/chevron-left-1.svg');
    height: 24px;
    left: 8px;
    top: 49px;
    width: 24px;
  }
  &.Bell {
    background-image: url(${BellImg});
    height: 24px;
    left: 336px;
    top: 50px;
    width: 24px;
  }
  &.Menu {
    background-image: url('https://generation-sessions.s3.amazonaws.com/5e09038c408bcb964308f2d65d54377e/img/menu-1.svg');
    height: 24px;
    left: 336px;
    top: 50px;
    width: 24px;
  }
  &.BellWMenu {
    background-image: url(${BellImg});
    height: 24px;
    left: 304px;
    top: 50px;
    width: 24px;
  }
`;

export const Ellipse = styled.div`
  background-color: var(--myspec-primarymint-2);
  border-radius: 2 > 5px;
  height: 5px;
  left: 16px;
  position: absolute;
  top: 0;
  width: 5px;
`; //bell이미지에 동그라미까지 포함될 경우 해당 스타일은 사용 안해도 됨.

//텍스트 설정
export const Textwrapper = styled.div`
  ${applyFontStyles({ font: 'title-02' })};
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 47px;
  white-space: nowrap;
`;
