// 회원가입 - 활동 지역을 입력받는 컨테이너
import { authSelector } from '../../modules/redux/auth';
import { TitleBox, Explain, LoginBtn } from '../../../styles/Survey';
import { Item } from '../../../components/filter/FilterItems';
import { useState } from 'react';
import { regionData } from '../../../modules/common/AttributeData';
import { AttributeInfoButton } from '../../../components/common/AttributeInfoButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const RegionForm = ({ dispatchField, onSubmit, order, type }) => {
  const [disabled, setDisabled] = useState(true);

  const region = useSelector(authSelector(type, 'region'));

  const onClick = (e) => {
    const value = e.target.innerText;
    const updatedRegion = region.includes(value)
      ? region.filter((item) => item !== value) // 기존 region 존재하면, 삭제하기
      : [...region, value]; // 기존 region 없으면, 추가하기

    dispatchField({
      target: {
        value: updatedRegion,
        name: 'region',
      },
    });
  };

  useEffect(() => {
    setDisabled(!region.length);
  }, [region]);

  return (
    <>
      <TitleBox>
        주로 어디에서
        <br />
        활동하고 계신가요?
        <br />
        <Explain>지역을 바탕으로 알맞는 정보를 추천해 드릴게요</Explain>
      </TitleBox>
      <form onSubmit={onSubmit} id={order}>
        <Item style={{ paddingTop: '45px' }}>
          {regionData.map(({ id, text }) => (
            <AttributeInfoButton
              text={text}
              onClick={onClick}
              isActive={region.includes(text)}
            />
          ))}
        </Item>
      </form>
      <LoginBtn form={order} disabled={disabled}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};

export default RegionForm;
