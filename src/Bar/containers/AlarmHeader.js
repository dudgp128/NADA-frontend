/** AlarmHeader 알람 페이지에 상단바를 출력하는 컨테이너  */
import { styled } from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const AlarmHeader = () => {
  return (
    <Header>
      <div className="notice">읽지 않은 알림 n건</div>
      <div className="readAll">모두 읽음</div>
    </Header>
  );
};

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 10px 10px;
  padding: 12px 16px;
  box-sizing: border-box;

  & > .notice {
    ${applyFontStyles({
      font: 'subtitle-01',
      color: 'var(--myspec-gray-scalegray-900)',
    })};
  }
  & > .readAll {
    width: 65px;
    ${applyFontStyles({
      font: 'subtitle-02',
      color: 'var(--myspec-gray-scalegray-600)',
    })};
  }
`;
