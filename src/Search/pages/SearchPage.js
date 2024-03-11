/**SearchPage 검색에 대한 결과를 출력하고 조건을 설정하는 페이지 */
import { SearchInput } from '../components/SearchInput';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchCategory } from '../components/SearchCategory';
import PostList from '../../components/postList/PostList';
import { AlignBox } from '../../Badge/components/AlignBox';
import {
  useSearchActivity,
  useSearchCommunity,
} from '../../modules/queries/useSearch';
import { searchSelector, initialized } from '../modules/redux/search';

const SearchPage = () => {
  const ContainerStyle = {
    paddingTop: '85px',
    display: ' flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: ' 0 auto',
    width: ' 375px',
  };

  const ResultStyle = {
    padding: '7px 15px',
  };

  // 상단바
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '검색',
        isShowBottom: false,
      }),
    );
    return () => dispatch(initialized());
  }, []);

  // redux에서 조회한 값 (redux > search > focus, text)
  const { position, text, focus, mainCategory } = useSelector(searchSelector);
  const [input, setInput] = useState(text);
  //const [result, setResult ] = useState();
  const isMaincategory = position === 'community';

  // 서버에서 검색 결과 불러오기
  const comResult = useSearchCommunity({
    mainCategory: mainCategory,
    focus: focus,
    value: input,
  });
  const actResult = useSearchActivity({
    focus: focus,
    value: input,
  });

  // 검색 버튼 누르면, input 상태 변경하기
  const onSubmit = (e) => {
    e.preventDefault();
    setInput(text);
  };

  return (
    <div style={ContainerStyle}>
      <SearchInput onSubmit={onSubmit} isMaincategory={isMaincategory} />
      <SearchCategory list={['제목', '본문', '작성자']} focus={focus} />
      <div style={ResultStyle}>
        <AlignBox text={'최신 순'} />
        <PostList
          type={position}
          result={isMaincategory ? comResult : actResult}
        />
      </div>
    </div>
  );
};

export default SearchPage;
