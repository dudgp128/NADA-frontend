import { applyFontStyles } from '../../styles/fontStyle';

export const Title = ({ text }) => {
  const title = {
    width: '100%',
    height: '60px',
    padding: '18px 15px',
    boxSizing: 'border-box',
    ...applyFontStyles({
      font: 'subtitle-01',
    }),
  };

  return <div style={title}>{text}</div>;
};
