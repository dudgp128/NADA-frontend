import { decodeJwtToken } from '../../Auth/modules/decodeJwtToken';
import { SpaceBetween } from '../../Search/components/SearchCategory';
import CardList from '../../components/cardList/CardList';
import { RightArrowSvg } from '../../icon/Login/RightArrowSvg';
import { ActivityTable } from '../components/ActivityTable';
import { BadgeItem } from '../components/BadgeItem';
import { ContentBox } from '../components/ContentBox';
import { layout_style, imgItem, hideBadgeBox } from '../styles/Badge';

const BadgeDetailsView = ({ badge_info, data, isPreview, hide }) => {
  const { userType } = decodeJwtToken(localStorage.getItem('token'));

  return (
    <>
      <div>
        <div style={{ width: 'fit-content', margin: '24px auto' }}>
          <BadgeItem cards={badge_info} $layout_style={layout_style} />
        </div>
      </div>
      <ContentBox title={'뱃지 설명'}>{data.content}</ContentBox>
      <ContentBox title={'활동 내역'}>
        <ActivityTable info={data.activity_info} />
      </ContentBox>
      {userType === 2 && (
        <SpaceBetween>
          <ContentBox title={'발급 명단'} />
          <RightArrowSvg width={10} />
        </SpaceBetween>
      )}
      <ContentBox title={'활동 사진'}>
        <CardList>
          {Array.from({ length: 4 }, () => 1).map((item, idx) => (
            <div style={imgItem} key={idx} />
          ))}
        </CardList>
      </ContentBox>
      {!isPreview && (
        <div style={hideBadgeBox} onClick={hide}>
          이 뱃지 숨기기
        </div>
      )}
    </>
  );
};

export default BadgeDetailsView;
