// 뱃지 모양 보여주는 그리드 컴포넌트
import styled from 'styled-components';
import badge_01 from '../icon/1.webp';
import badge_02 from '../icon/2.webp';
import badge_03 from '../icon/3.webp';
import badge_04 from '../icon/4.webp';
import badge_05 from '../icon/5.webp';
import badge_06 from '../icon/6.webp';
import { useEffect, useState } from 'react';

const GridContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 11px;
  padding-bottom: 120px;

  & > div {
    width: 167px;
    aspect-ratio: 1/1;
    border-radius: 20px;
    background-color: var(--myspec-gray-scalegray-100, #f8f8f8);
    box-sizing: border-box;
    border: 4px solid rgba(0, 0, 0, 0);

    &.active {
      border: 4px solid var(--myspec-primaryblue-1, #1363ff);
    }
  }
`;
const ShapeGrid = ({ active, onClick, newImg }) => {
  const [icons, setIcons] = useState([
    badge_01,
    badge_02,
    badge_03,
    badge_04,
    badge_05,
    badge_06,
  ]);

  const handleClick = (e) => {
    const { dataset } = e.currentTarget;
    onClick(dataset);
  };

  useEffect(() => {
    if (newImg.length !== 0) {
      setIcons((prev) => [newImg, ...prev]);
    }
  }, [newImg]);

  return (
    <GridContainer>
      {icons.map((icon, index) => (
        <div
          style={{
            backgroundImage: `url(${icon})`,
            backgroundSize: 'cover',
          }}
          className={index === active ? 'active' : ''}
          onClick={(e) => handleClick(e)}
          data-name={'shape'}
          key={index}
          data-value={index}
          data-src={icon}
        />
      ))}
    </GridContainer>
  );
};

export default ShapeGrid;
