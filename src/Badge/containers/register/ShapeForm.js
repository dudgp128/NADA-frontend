// 뱃지 모양을 입력받는 컨테이너
import { LoginBtn, TextWithSvg, TitleBox } from '../../../styles/Survey';
import styled from 'styled-components';
import { RightArrowSvg } from '../../../icon/Login/RightArrowSvg';
import { applyFontStyles } from '../../../styles/fontStyle';
import ShapeGrid from '../../components/ShapeGrid';
import { useState } from 'react';
import usePostImage from '../../../modules/queries/usePostImage';

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
  const [newImg, setNewImage] = useState([]);

  const onClick = (dataset) => {
    setActive(Number(dataset.value)); // 문자열로 저장된 값이므로 숫자로 변환
    const { value, name, src } = dataset;
    dispatchField({
      target: {
        name,
        value: { index: value, src },
      },
    });
  };

  //선택된 이미지를 백엔드에 upload하고 반환된 path값을 imgFiles에 저장
  const { mutateAsync } = usePostImage();

  const saveImgFile = async (e) => {
    const files = Array.from(e.target.files);
    const { path } = await mutateAsync({ section: 'badge', files: files });

    setNewImage(path[0]);
  };

  return (
    <>
      <TitleBox>뱃지 모양을 골라 주세요.</TitleBox>
      <form onSubmit={onSubmit} id={order}>
        <RoundSpaceBetween>
          <label htmlFor="upload-photo">
            <div>사진 업로드하기</div>
          </label>
          <input
            style={{ display: 'none' }}
            multiple
            type="file"
            accept="image/*"
            id="upload-photo"
            name="img"
            onChange={saveImgFile}
          ></input>
          <RightArrowSvg width={8} height={16} />
        </RoundSpaceBetween>
        <ShapeGrid onClick={onClick} active={active} newImg={newImg} />
      </form>
      <FixedLoginBtn form={order} disabled={active === null}>
        <div style={{ padding: '14px 0px' }}>다음</div>
      </FixedLoginBtn>
    </>
  );
};

export default ShapeForm;
