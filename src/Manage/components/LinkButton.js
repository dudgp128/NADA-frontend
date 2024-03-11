import { Link } from 'react-router-dom';
import { AngleBracket } from '../../icon/AngleBracket';
import { applyFontStyles } from '../../styles/fontStyle';

export const LinkButton = ({ url, text, Direction }) => {
  const link = {
    padding: '12px 15px',
    display: 'flex',
    alignItems: 'center',
    textDecorationLine: 'none',
    gap: '11px',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: 'var(--myspec-gray-scalegray-200)',
    ...applyFontStyles({
      font: 'title-02',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };

  return (
    <Link to={url} style={link}>
      {text}
      <AngleBracket Direction={Direction || 'right'} />
    </Link>
  );
};
