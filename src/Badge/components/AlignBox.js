// ['연도별', '종류별'] 정렬
import { applyFontStyles } from '../../styles/fontStyle';

export const AlignBox = ({ text, onClick }) => {
  const BoxWrapper = {
    width: 'fit-content',
    display: 'flex',
    padding: '0px 0px 8px 12px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '4px',
    float: 'right',
  };

  const titleStyle = Object.assign(
    applyFontStyles({
      font: 'body-02',
      color: 'var(--myspec-gray-scalegray-600)',
    }),
    { margin: '0' },
  );

  return (
    <span style={BoxWrapper} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="13"
        viewBox="0 0 11 13"
        fill="none"
      >
        <path d="M1 4L3.64706 1.5V11.5" stroke="#888888" />
        <path d="M10 9L7.35294 11.5L7.35294 1.5" stroke="#888888" />
      </svg>
      <p style={titleStyle}>{text || '연도별 정렬'}</p>
    </span>
  );
};
