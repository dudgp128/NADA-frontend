// 추천 대외활동 보여주는 컴포넌트
import ActivityItem from '../../Acitivity/components/ActivityItem';
import { applyFontStyles } from '../../styles/fontStyle';
import { FixedSizeList as List } from 'react-window';

export const RecommendList = ({ activities }) => {
  const Column = ({ index, style }) => (
    <div
      style={{
        ...style,
        boxSizing: 'border-box',
        paddingRight: '12px',
      }}
      key={index}
    >
      {activities[index] && <ActivityItem cards={activities[index]} />}
    </div>
  );

  return (
    <>
      <div
        style={Object.assign(applyFontStyles({ font: 'subtitle-01' }), {
          padding: '12px 0',
        })}
      >
        추천 대외활동
      </div>
      <List
        height={250}
        itemCount={activities.length}
        itemSize={182}
        layout="horizontal"
        width={375}
        style={{ boxSizing: 'border-box' }}
      >
        {Column}
      </List>
    </>
  );
};
