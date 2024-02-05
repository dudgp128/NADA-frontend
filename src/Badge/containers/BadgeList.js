// 뱃지 아이템을 리스트로 보여주는 컨테이너
import { BadgeItem } from '../components/BadgeItem';
import { applyFontStyles } from '../../styles/fontStyle';
import { FixedSizeList as List } from 'react-window';

export const BadgeList = ({ title, badge_info }) => {
  const Column = ({ index, style }) => (
    <div
      style={{
        ...style,
        boxSizing: 'border-box',
        paddingRight: '20px',
      }}
      key={index}
    >
      {badge_info[index] && <BadgeItem key={index} cards={badge_info[index]} />}
    </div>
  );

  return (
    <>
      <div
        style={Object.assign(applyFontStyles({ font: 'subtitle-03' }), {
          padding: '16px 0',
          textAlign: 'left',
        })}
      >
        {title}
      </div>
      <List
        height={195}
        itemCount={badge_info.length}
        itemSize={132 + 20} // width + paddingRight
        layout="horizontal"
        width={375}
        style={{ boxSizing: 'border-box' }}
      >
        {Column}
      </List>
    </>
  );
};
