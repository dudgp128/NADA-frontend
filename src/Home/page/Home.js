import { useEffect, useState } from 'react';
import CardList from '../../components/cardList/CardList';
import WeekCalendar from '../../Calendar/containers/WeekCalendar';
import React, { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useNavigate } from 'react-router-dom';
import BoardCardItem from '../../components/cardList/BoardCardItem';
import { useActivityList } from '../../Acitivity/modules/queries/useGetActivity';
import '../../styles/PageCommon.scss';
import { RecommendList } from '../components/RecommendList';

const Home = () => {
  const BannerSlider = React.lazy(() => import('../components/BannerSlider'));

  const dispatch = useDispatch();
  const community_cards = [
    { id: 1, title: '유용한 활동 사이트', category: '자유' },
    { id: 2, title: '같이 공모전 나가실 분', category: '홍보' },
    { id: 3, title: '팀원 모집합니다.', category: '홍보' },
  ];

  const [activities, setActivities] = useState([]);

  // 활동글 불러오기
  const { data: activityData } = useActivityList();

  useEffect(() => {
    if (activityData) {
      setActivities(activityData);
    }
  }, [activityData, activities]);

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'logo',
        text: '',
        isShowBottom: true,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/calendar');
  };

  return (
    <div className="pageContainer">
      <Suspense
        fallback={<div className="loading" style={{ height: '118px' }}></div>}
      >
        <BannerSlider />
      </Suspense>
      <div onClick={onClick}>
        <WeekCalendar className="calendarweek" />
      </div>
      <CardList
        title={'지금 인기 있는 게시글이에요🔥'}
        title_font={'subtitle-01'}
      >
        <BoardCardItem cards={community_cards} />
      </CardList>
      <div className="RecommendList">
        <RecommendList activities={activities} />
      </div>
    </div>
  );
};

export default Home;
