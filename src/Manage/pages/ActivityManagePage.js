/* ActivityManagePage 관리자가 현재 등록되어있는 activity 리스트를 볼 수 있는 페이지 */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FixedSizeGrid as Grid } from 'react-window';
import { LayoutStyle } from './HomePage.';
import { useActivityList } from '../../Acitivity/modules/queries/useGetActivity';
import ActivityItem from '../../Acitivity/components/ActivityItem';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import Header from '../containers/Header';
import { ReportsButton } from '../components/ReportsButton';
import { initializeForm } from '../../modules/redux/postData';

const ActivityManagePage = () => {
  const dispatch = useDispatch();
  const [activities, setActivities] = useState([]);
  const [showReports, setShowReports] = useState(false);

  // 활동글 불러오기
  const { data } = useActivityList();

  useEffect(() => {
    dispatch(initializeForm());
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);

  useEffect(() => {
    if (data) {
      if (showReports) {
        const filteredActivity = activities.filter((item) => item.reports);
        setActivities(filteredActivity);
      } else setActivities(data);
    }
  }, [data, showReports]);

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 4 + columnIndex;
    const activity = activities[index];
    return (
      <div
        style={{
          ...style,
          boxSizing: 'border-box',
          paddingRight: '12px',
          paddingBottom: '12px',
        }}
        key={index}
      >
        {activity && <ActivityItem cards={activity} />}
      </div>
    );
  };

  return (
    <LayoutStyle>
      <Header text={'활동 게시글'} url={'/activity/ActWrite'} />
      <ReportsButton
        showReports={showReports}
        setShowReports={setShowReports}
      />

      <Grid
        columnCount={6}
        columnWidth={182}
        height={Math.ceil(activities.length / 6) * 222}
        rowCount={Math.ceil(activities.length / 4)}
        rowHeight={234}
        width={1125}
        style={{ boxSizing: 'border-box', padding: '12px' }}
      >
        {Cell}
      </Grid>
    </LayoutStyle>
  );
};

export default ActivityManagePage;
