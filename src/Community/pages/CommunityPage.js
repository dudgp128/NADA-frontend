/** CommunityPage 커뮤니티 메인 페이지 */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../../components/cardList/CardList';
import PostList from '../../components/common/postList/PostList';
import Category from '../containers/Category';
import Filter from '../../components/common/filter/Filter';
import { GoToWriteButton } from '../../containers/common/GoToWriteButton';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { initializeAll } from '../../modules/redux/filter';
import { initializeAll as initializeAllPostWrite } from '../../modules/redux/postWrite';
import { Border, Contents } from '../styles/CommunityStyle';
import BoardCardItem from '../../components/cardList/BoardCardItem';
import { SearchInput } from '../../Search/components/SearchInput';
import { useGetPostList } from '../modules/queries/useGetCommunity';
import '../../styles/PageCommon.scss';

const Community = () => {
  const dispatch = useDispatch();
  const community_cards = [
    { id: 1, title: '유용한 활동 사이트', category: '자유' },
    { id: 2, title: '같이 공모전 나가실 분', category: '홍보' },
    { id: 3, title: '팀원 모집합니다.', category: '홍보' },
  ];

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'bell',
        text: '커뮤니티',
        isShowBottom: true,
      }),
    );
    return () => {
      dispatch(initializeAllPostWrite());
      dispatch(initializeAll());
    };
  }, []);

  const filter = useSelector(({ filter }) => filter);

  // 서버에서 가져온 query 결과 가져오기
  const result = useGetPostList({ filter: filter });

  return (
    <>
      <div className="pageContainer">
        <SearchInput />
        <CardList
          title={'지금 인기 있는 게시글이에요🔥'}
          title_font={'subtitle-01'}
        >
          <BoardCardItem cards={community_cards} />
        </CardList>
        <Contents>
          <div className="content">
            <Category />
            <Border />
            <Filter />
            {result && <PostList type={'community'} result={result} />}
          </div>
        </Contents>
      </div>
      <GoToWriteButton />
    </>
  );
};

export default Community;
