/** FilterBar 글작성 페이지에 filter를 출력하는 컨테이너  */
import { Frame } from '../../../Community/styles/PostWriteStyle';
import { MainCategoryButton } from '../../../Community/containers/postWrite/MainCategoryButton';
import { OpenModalButton } from '../../../components/common/openModalButton';
import { postWriteSelector } from '../../../modules/redux/postWrite';
import { useSelector } from 'react-redux';

export const FilterBar = ({ type }) => {
  const mainCategory = useSelector(
    postWriteSelector('postWriteSubmit', 'mainCategory'),
  );

  return (
    <Frame>
      {type === 'community' && <MainCategoryButton />}
      {mainCategory !== '자유' && (
        <>
          <OpenModalButton content="region" />
          <OpenModalButton content="field" />
          <OpenModalButton content="category" />
        </>
      )}
    </Frame>
  );
};
