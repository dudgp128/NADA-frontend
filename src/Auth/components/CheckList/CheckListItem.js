import { ErrorMessage } from '../../../styles/Survey';
import { CheckSvg } from '../../../icon/Login/CheckSvg';

const CheckListItem = ({ text, checked }) => {
  const CheckItemStyle = {
    alignItems: 'center',
    display: 'inline-flex',
    gap: '8px',
    justifyContent: 'center',
  };

  return (
    <div style={CheckItemStyle}>
      <CheckSvg
        $color={
          checked ? '--myspec-primarymint-1' : '--myspec-gray-scalegray-500'
        }
      />
      <ErrorMessage>{text}</ErrorMessage>
    </div>
  );
};
export default CheckListItem;
