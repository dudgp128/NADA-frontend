// 뱃지 설명 컴포넌트
import React from 'react';
import { applyFontStyles } from '../../styles/fontStyle';

export const ContentBox = ({ title, children }) => {
  const ExplainBadge = {
    background: 'white',
    display: 'flex',
    padding: '16px 15px',
    flexDirection: 'column',
    alignItems: 'flex - start',
    gap: '12px',
    textAlign: 'left',
  };

  const titleStyle = applyFontStyles({ font: 'subtitle-01', color: '' });
  const explainStyle = applyFontStyles({ font: 'body-01', color: '' });

  return (
    <div style={ExplainBadge}>
      <div style={titleStyle}>{title}</div>
      {children && <div style={explainStyle}>{children}</div>}
    </div>
  );
};
