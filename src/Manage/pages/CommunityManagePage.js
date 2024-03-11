import { LayoutStyle } from './HomePage.';
import Header from '../containers/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import PostList from '../../components/postList/PostList';
import { useGetPostList } from '../../Community/modules/queries/useGetCommunity';
import Category from '../../Community/containers/Category';
import Filter from '../../components/filter/Filter';
import { ReportsButton } from '../components/ReportsButton';
import { initializeForm } from '../../modules/redux/postData';
import { initializeAll as initializeFilter } from '../../modules/redux/filter';

const CommunityManagePage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter);
  const [showReports, setShowReports] = useState(false);
  const [posts, setPosts] = useState([]);
  // 서버에서 가져온 query 결과 가져오기
  const result = useGetPostList({ filter: filter });

  useEffect(() => {
    dispatch(initializeForm());
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
    return () => dispatch(initializeFilter());
  }, []);

  useEffect(() => {
    if (result.data && showReports) {
      const filteredActivity = result.data.filter((item) => item.reports);
      setPosts({ data: filteredActivity });
    } else {
      setPosts(result);
    }
  }, [result.data, result.isLoading, showReports]);

  return (
    <LayoutStyle>
      <Header text={'커뮤니티 게시글'} url={'/community/PostWrite'} />
      <Category />
      <Filter />
      <ReportsButton
        showReports={showReports}
        setShowReports={setShowReports}
      />
      <PostList type={'community'} result={posts} />
    </LayoutStyle>
  );
};

export default CommunityManagePage;
