export const AngleBracket = ({ Direction, onClick, color }) => {
  const result = Direction === 'right' ? 'm1 13 6-6-6-6' : 'M7 1 1 7l6 6';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      fill="none"
      viewBox="0 0 8 14"
      onClick={onClick}
    >
      <path stroke={color || '#1A1A1A'} d={result} />
    </svg>
  );
};
