import { useEffect } from 'react';
import CardList from '../../components/cardList/CardList';
import WeekCalendar from '../../Calendar/containers/WeekCalendar';
import React, { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useNavigate } from 'react-router-dom';
import BoardCardItem from '../../components/cardList/BoardCardItem';
import { useRecommendActivities } from '../../Acitivity/modules/queries/useGetActivity';
import '../../styles/PageCommon.scss';
import { RecommendList } from '../components/RecommendList';
import { useGetTopPost } from '../../Community/modules/queries/useGetCommunity';

const Home = () => {
  const BannerSlider = React.lazy(() => import('../components/BannerSlider'));

  const dispatch = useDispatch();

  // 활동글 불러오기
  const { data: activityData } = useRecommendActivities();

  // 인기글 불러오기
  const { data: postData } = useGetTopPost();

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
        {postData && <BoardCardItem cards={postData} />}
      </CardList>
      <div className="RecommendList">
        {activityData && <RecommendList activities={activityData} />}
      </div>
    </div>
  );
};

export default Home;
