import { applyFontStyles } from './fontStyle';

// ************ BadgePage.js

export const pageContainer = {
  boxSizing: 'border-box',
  display: 'flex',
  width: '375px',
  margin: '0px auto',
  padding: '16px 15px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flexShrink: '0',
  background: 'var(--myspec-gray-scale-white, #FFF)',
};

export const myBadge = {
  display: 'flex',
  paddingBottom: '0px',
  alignItems: 'center',
  gap: '8px',
  borderBottom: '2px solid var(--myspec-primaryblue-1, #1363ff)',
};

// ********* DetailBadge.js

export const layout_style = {
  width: '150px',
  height: 'fit-content',
  gap: '14px',
  textAlign: 'center',
  justifyContent: 'center',
  paddingTop: '0.3em',
};

export const imgItem = {
  width: '96px',
  aspectRatio: '1/1',
  borderRadius: '10px',
  background: 'var(--myspec-gray-scalegray-400)',
};

export const hideBadgeBox = Object.assign(
  applyFontStyles({
    font: 'body-02',
    color: 'var(--myspec-primaryred-1)',
  }),
  { paddingTop: '16px', paddingBottom: '16px', textAlign: 'center' },
);
