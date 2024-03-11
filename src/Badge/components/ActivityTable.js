import { YYYYdotMM } from '../../modules/common/formatDate';

// 활동 이력을 보여주는 컴포넌트

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
      {info.map(({ started, ended, content }, idx) => (
        <div style={rowLayout} key={idx}>
          <div style={periodLayout}>
            <div>{YYYYdotMM(started)}</div>
            <div> ~ </div>
            <div>{YYYYdotMM(ended)}</div>
          </div>
          <div>{content}</div>
        </div>
      ))}
    </div>
  );
};
