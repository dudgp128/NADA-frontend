import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

const MarginBtn = styled.div`
  width: 345px;
  height: 55px;
  position: relative;
  bottom: 50px;
  background: var(--myspec-primaryblue-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  ${applyFontStyles({ font: 'title-01', color: 'white' })}
`;

export const BottomButton = ({ text, act }) => {
  return (
    <MarginBtn onClick={() => act()}>
      <div>{text}</div>
    </MarginBtn>
  );
};
