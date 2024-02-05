export const LinkSvg = ({ size, isActive = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 18}
      height={size || 18}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke={`${isActive ? `#1363ff` : '#888'} `}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m6 12.001 6-6m-4-3 .463-.536a5 5 0 1 1 7.071 7.072l-.534.464m-5 5-.397.534a5.068 5.068 0 0 1-7.127 0 4.972 4.972 0 0 1 0-7.071L3 8.001"
      />
    </svg>
  );
};
