import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const ToggleContent = ({ text, isActive, setIsActive }) => {
  const layout = {
    width: '100%',
    height: '60px',
    padding: '15px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...applyFontStyles({
      font: 'subtitle-02',
    }),
  };

  return (
    <div style={layout}>
      <div>{text}</div>
      <ToggleSwitch>
        <CheckBox
          type="checkbox"
          checked={isActive}
          onChange={() => setIsActive(!isActive)}
        />
        <ToggleSlider />
      </ToggleSwitch>
    </div>
  );
};

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 53px;
  height: 29px;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 21px;
    width: 21px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleSlider} {
    background-color: #1363ff;
  }

  &:focus + ${ToggleSlider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${ToggleSlider}:before {
    -webkit-transform: translateX(23px);
    -ms-transform: translateX(23px);
    transform: translateX(23px);
  }
`;
