/** TagButton region, field, category 정보를 태그 형식으로 출력하는 컴포넌트 */
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TagButton from './TagButton';

const TagButtons = () => {
  const { data } = useSelector(({ postData }) => postData.postData);
  const { region, field, category } = data;
  const combinedArray = [...region, ...field, category];

  return (
    <TagList>
      {combinedArray.map((tag, index) => (
        <TagButton tag={tag} key={index} />
      ))}
    </TagList>
  );
};

export default TagButtons;

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
`;
