import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { BadgeItem } from '../components/BadgeItem';
import { ContentBox } from '../components/ContentBox';
import { ActivityTable } from '../components/ActivityTable';
import CardList from '../../components/cardList/CardList';
import { layout_style, imgItem, hideBadgeBox } from '../styles/Badge';
import '../../styles/PageCommon.scss';
import useModal from '../../Modal/modules/useModal';
import { decodeJwtToken } from '../../Auth/modules/decodeJwtToken';
import { RightArrowSvg } from '../../icon/Login/RightArrowSvg';
import { SpaceBetween } from '../../Search/components/SearchCategory';

const DetailBadgePage = ({ isPreview }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPreview) {
      dispatch(
        changeBarStatus({
          headerState: 'back',
          text: '뱃지',
          isShowBottom: true,
        }),
      );
    }
  });

  const badge_info = {
    id: 1,
    year: 2023,
    img_src: '',
    badgeType: '교내 동아리',
    title: 'TEAM NADA 2기',
    team: '디자인팀',
    role: '팀원',
  };

  const data = {
    content:
      '블록체인 뱃지를 기반으로 취업에 관한 전방위적 기능을 제공하고자 하는 IT 창업 동아리 TEAM NADA입니다.',
    activity_info: [
      { start: '2023.01', end: '2023.02', name: '활동 계획 수립' },
      { start: '2023.03', end: '2023.04', name: '에창패 공모전' },
      { start: '2023.04', end: '2023.06', name: '성북구 청년소셜 벤처' },
    ],
  };

  const { openModal } = useModal();

  const onClick = () => {
    openModal({
      type: 'AskModal',
      contentType: '뱃지',
      title: '이 뱃지를 숨길까요?',
      actionType: '숨기기',
      content: '숨긴 뱃지는 MY-숨긴 뱃지에서 관리할 수 있어요',
    });
  };

  const { userType } = decodeJwtToken(localStorage.getItem('token'));

  return (
    <>
      <div className="pageContainer">
        <div style={{ padding: '24px 112px' }}>
          <BadgeItem cards={badge_info} $layout_style={layout_style} />
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
          <div style={hideBadgeBox} onClick={onClick}>
            이 뱃지 숨기기
          </div>
        )}
      </div>
    </>
  );
};

export default DetailBadgePage;
