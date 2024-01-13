import { authSelector } from '../../../modules/auth';
import { TitleBox, Explain, LoginBtn } from '../../../styles/Auth';
import { useState } from 'react';
import { fieldData } from '../../../modules/common/AttributeData';
import { Item } from '../../../components/common/filter/FilterItems';
import { AttributeInfoButton } from '../../../components/common/AttributeInfoButton';
import { useSelector } from 'react-redux';

const FieldForm = ({ dispatchField, onSubmit, order, type }) => {
  const [disabled, setDisabled] = useState(true);

  const field = useSelector(authSelector(type, 'field'));

  const onClick = (e) => {
    const value = e.target.innerText;
    const updatedField = field.includes(value)
      ? field.filter((item) => item !== value) // 기존 Field 존재하면, 삭제하기
      : [...field, value]; // 기존 Field 없으면, 추가하기

    dispatchField({
      target: {
        value: updatedField,
        name: 'field',
      },
    });
  };

  return (
    <>
      <TitleBox>
        관심 분야가
        <br />
        어떻게 되시나요?
      </TitleBox>
      <Explain>관심 분야를 바탕으로 공고를 띄워 드려요</Explain>
      <Item style={{ paddingTop: '45px' }}>
        {fieldData.map(({ id, text }) => (
          <AttributeInfoButton
            key={id}
            text={text}
            onClick={onClick}
            isActive={field.includes(text)}
          />
        ))}
      </Item>
      <LoginBtn form={order} disabled={disabled}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};

export default FieldForm;
