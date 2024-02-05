// 뱃지 모양을 입력받는 컨테이너
import { LoginBtn, TextWithSvg, TitleBox } from '../../../styles/Survey';
import styled from 'styled-components';
import { RightArrowSvg } from '../../../icon/Login/RightArrowSvg';
import { applyFontStyles } from '../../../styles/fontStyle';
import ShapeGrid from '../../components/ShapeGrid';
import { useState } from 'react';

const RoundSpaceBetween = styled(TextWithSvg)`
  ${applyFontStyles({ font: 'body-01' })}
  border-radius: 20px;
`;

export const FixedLoginBtn = styled(LoginBtn)`
  position: fixed;
  max-width: 345px;
  border: none;
  margin-bottom: 50px;
  & > div {
    ${applyFontStyles({ font: 'title-01', color: 'white' })}
  }
`;

const ShapeForm = ({ onSubmit, order, dispatchField }) => {
  const [active, setActive] = useState(null);

  const onClick = (dataset) => {
    setActive(Number(dataset.value)); // 문자열로 저장된 값이므로 숫자로 변환
    const { value, name } = dataset;
    dispatchField({
      target: {
        name,
        value: { index: value, src: '' },
      },
    });
  };

  return (
    <>
      <TitleBox>뱃지 모양을 골라 주세요.</TitleBox>
      <form onSubmit={onSubmit} id={order}>
        <RoundSpaceBetween>
          <div>사진 업로드하기</div>
          <RightArrowSvg width={8} height={16} />
        </RoundSpaceBetween>
        <ShapeGrid onClick={onClick} active={active} />
      </form>
      <FixedLoginBtn form={order} disabled={active === null}>
        <div>다음</div>
      </FixedLoginBtn>
    </>
  );
};

export default ShapeForm;
