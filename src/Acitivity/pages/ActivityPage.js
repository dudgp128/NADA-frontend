import CardList from '../../components/cardList/CardList';
import { SearchInput } from '../../Search/components/SearchInput';
import { useEffect, useState } from 'react';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useDispatch, useSelector } from 'react-redux';
import RecentActivityItem from '../components/RecentActivityItem';
import Filter from '../../components/common/filter/Filter';
import { AlignBox } from '../../Badge/components/AlignBox';
import { useNavigate } from 'react-router-dom';
import { initialized } from '../../Search/modules/redux/search';
import { useActivityList } from '../modules/queries/useGetActivity';
import '../../styles/PageCommon.scss';
import AcitivityList from '../container/AcitivityList';
import { GoToWriteButton } from '../../containers/common/GoToWriteButton';

const ActivityPage = () => {
  const dispatch = useDispatch();
  const [activities, setActivities] = useState([]);

  const filter = useSelector(({ filter }) => filter);

  // 활동글 불러오기
  const { data, isError } = useActivityList({ filter: filter });

  useEffect(() => {
    if (data) {
      setActivities(data);
    }
  }, [data, activities]);

  // 최근 본 게시글
  const recent = JSON.parse(localStorage.getItem('recentActivitiesMap'));

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'bell',
        text: '활동',
        isShowBottom: true,
      }),
    );
  }, []);

  // 검색 redux 초기화하기
  useEffect(() => {
    dispatch(initialized());
  }, []);

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/activity/search');
  };

  return (
    <>
      <div className="pageContainer">
        <SearchInput onSubmit={onSubmit} />
        {recent && (
          <CardList title={'최근 본 활동'} title_font={'subtitle-01'}>
            <RecentActivityItem cards={recent.reverse()} />
          </CardList>
        )}
        <div style={{ padding: '16px' }}>
          <div>
            <Filter position="activity" />
            <AlignBox text={'최신 순'} />
          </div>
          <AcitivityList activities={activities} isError={isError} />
        </div>
      </div>
      <GoToWriteButton isActivity={true} />
    </>
  );
};

export default ActivityPage;
