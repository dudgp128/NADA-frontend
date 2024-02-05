import React from 'react';
import { X } from '../../icon/X';
import { InputBox } from '../../styles/Survey';
import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

const InputContainer = styled(InputBox)`
  & > .inputWrapper {
    display: flex;
    justify-content: space-between;

    input {
      ${applyFontStyles({
        font: 'subtitle-02',
      })}
      width:inherit;
      &::placeholder {
        color: 'var(--myspec-gray-scalegray-500)';
      }
      background: var(--myspec-gray-scalegray-100);
      width: calc(100% - 12px - 16px); // 전체화면 - X.svg - gap
    }
  }
`;

const InputBoxWithX = ({
  name,
  index,
  placeholder,
  onChange,
  onClose,
  value,
}) => {
  return (
    <InputContainer>
      <div className="inputWrapper">
        <input
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e, index)}
          value={value}
          required
        />
        <div onClick={() => onClose(index)}>
          <X size={12} bold={2} />
        </div>
      </div>
    </InputContainer>
  );
};

export default React.memo(InputBoxWithX);
