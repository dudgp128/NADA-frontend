import { Link } from 'react-router-dom';
import { AngleBracket } from '../../icon/AngleBracket';
import { applyFontStyles } from '../../styles/fontStyle';
import styled from 'styled-components';

export const LinkWrapper = styled(Link)`
  width: 100%;
  height: fit-content;
  padding: 18px 17px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration-line: none;
  background-color: white;
  ${applyFontStyles({
    font: 'subtitle-02',
  })}
`;

export const Content = ({ url, text, version, children }) => {
  const versionStyle = {
    ...applyFontStyles({
      font: 'body-02',
      color: 'var(--myspec-gray-scalegray-600)',
    }),
  };

  const rightOutput = () => {
    return version ? (
      <div style={versionStyle}>{version}</div>
    ) : (
      <AngleBracket Direction={'right'} />
    );
  };

  return (
    <LinkWrapper to={url}>
      {children}
      {text}
      {rightOutput()}
    </LinkWrapper>
  );
};
