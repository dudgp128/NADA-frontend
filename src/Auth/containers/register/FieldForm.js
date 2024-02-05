// 회원가입 - 관심분야를 입력받는 컨테이너
import { authSelector } from '../../modules/redux/auth';
import { TitleBox, Explain, LoginBtn } from '../../../styles/Survey';
import { useState } from 'react';
import { fieldData } from '../../../modules/common/AttributeData';
import { Item } from '../../../components/common/filter/FilterItems';
import { AttributeInfoButton } from '../../../components/common/AttributeInfoButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const FieldForm = ({ dispatchField, onSubmit, order, type }) => {
  const [disabled, setDisabled] = useState(true);

  const interestField = useSelector(authSelector(type, 'interestField'));

  const onClick = (e) => {
    const value = e.target.innerText;
    const updatedField = interestField.includes(value)
      ? interestField.filter((item) => item !== value) // 기존 Field 존재하면, 삭제하기
      : [...interestField, value]; // 기존 Field 없으면, 추가하기

    dispatchField({
      target: {
        value: updatedField,
        name: 'interestField',
      },
    });
  };

  useEffect(() => {
    setDisabled(!interestField.length);
  }, [interestField]);

  return (
    <>
      <TitleBox>
        관심 분야가
        <br />
        어떻게 되시나요?
        <Explain>관심 분야를 바탕으로 공고를 띄워 드려요</Explain>
      </TitleBox>
      <form onSubmit={onSubmit} id={order}>
        <Item style={{ paddingTop: '45px' }}>
          {fieldData.map(({ id, text }) => (
            <AttributeInfoButton
              key={id}
              text={text}
              onClick={onClick}
              isActive={interestField.includes(text)}
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

export default FieldForm;
