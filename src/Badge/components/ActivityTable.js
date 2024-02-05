// 활동 이력을 보여주는 컴포넌트
import React from 'react';

export const ActivityTable = ({ info }) => {
  const tableLayout = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',
  };

  const rowLayout = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  };

  const periodLayout = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '4px',
    color: 'var(--myspec-gray-scalegray-600)',
  };

  return (
    <div style={tableLayout}>
      {info.map(({ start, end, name }, idx) => (
        <div style={rowLayout} key={idx}>
          <div style={periodLayout}>
            <div>{start}</div>
            <div> ~ </div>
            <div>{end}</div>
          </div>
          <div>{name}</div>
        </div>
      ))}
    </div>
  );
};
