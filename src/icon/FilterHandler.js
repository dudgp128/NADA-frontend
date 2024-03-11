export const FilterHandler = ({ className, isSmall, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isSmall ? '10' : '14'}
      height={isSmall ? '6' : '8'}
      viewBox="0 0 14 8"
      fill="none"
    >
      <path
        d={`${
          className === 'unselected'
            ? 'M1 0.5L7 6.5L13 0.5'
            : 'M13 7.5L7 1.5L1 7.5'
        }`}
        stroke={color || `${className === 'unselected' ? '#888888' : 'white'}`}
      />
    </svg>
  );
};
