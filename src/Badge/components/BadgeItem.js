// 뱃지를 보여주는 아이템 [shape, type, title, team, role]
import styled from 'styled-components';
import { body_01, caption_02, subtitle_01 } from '../../styles/fontStyle';

const BadgeContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: ${({ $layout_style }) => $layout_style?.width || '132px'};
  height: ${({ $layout_style }) => $layout_style?.height || '195px'};
  flex-direction: column;
  justify-content: center;
  gap: ${({ $layout_style }) => $layout_style?.gap || '12px'};

  & > .imgWrapper {
    display: flex;
    width: 100%;
    aspect-ratio: 1 / 1;
    justify-content: center;
    align-items: center;
  }

  & > .textWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: ${({ $layout_style }) => $layout_style?.textAlign || 'left'};

    & > .badgeType {
      ${caption_02('var(--myspec-gray-scale-gray-600, #888)')}
    }

    & > .title {
      padding-top: ${({ $layout_style }) => $layout_style?.paddingTop || ''};
      width: inherit;
      ${subtitle_01('var(--myspec-gray-scale-gray-900, #1A1A1A)')}
      white-space: nowrap;
    }

    & > .roleWrapper {
      width: inherit;
      display: inline-flex;
      justify-content: ${({ $layout_style }) =>
        $layout_style?.justifyContent || 'flex-start'};
      gap: 4px;
      ${body_01('var(--myspec-gray-scale-gray-600, #888)')};
    }
  }
`;

export const BadgeItem = ({ cards, $layout_style }) => {
  const { img_src, badgeType, title, team, role } = cards;
  return (
    <>
      <BadgeContainer $layout_style={$layout_style}>
        <div className="imgWrapper" src={img_src} />
        <div className="textWrapper">
          <div className="badgeType"> {badgeType} </div>
          <div className="title"> {title}</div>
          <div className="roleWrapper">
            {team && <div className="team">{team}</div>}
            <div className="role">{role}</div>
          </div>
        </div>
      </BadgeContainer>
    </>
  );
};
