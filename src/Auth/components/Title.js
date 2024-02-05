import React from 'react';
import { TitleBox } from '../../styles/Survey';

const Title = ({ text }) => {
  return (
    <TitleBox>
      {text}
      <br />
      입력해 주세요
    </TitleBox>
  );
};

export default React.memo(Title);
