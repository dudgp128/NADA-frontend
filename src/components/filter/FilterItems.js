/** FilterItems 활성화 된 filter의 내용을 출력하기 위한 filter아이템 관리 컨테이너*/
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SelectButton } from './SelectButton';
import { SelectAllButton } from './SelectAllButton';
import { useSelector } from 'react-redux';
import { filterSelector } from '../../modules/redux/filter';
import { selectConfig } from '../../modules/common/AttributeData';

export const FilterItems = ({ text, position }) => {
  const mainCategory = useSelector(
    filterSelector('buttonSelect', 'maincategory'),
  );

  const [contents, setContents] = useState([]);
  useEffect(() => {
    setContents(selectConfig({ content: text, mainCategory, position }));
  }, [mainCategory, text]);

  const output = () => {
    return contents.map(({ text }, index) => (
      <SelectButton key={index} text={text} />
    ));
  };

  return (
    <Items>
      <Item>
        <SelectAllButton />
        {output(text)}
      </Item>
    </Items>
  );
};

const Items = styled.div`
  position: relative;
  width: 345px;
`;

export const Item = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 8px;
  position: relative;
  padding-top: 8px;
  width: 100%;
  box-sizing: border-box;
`;
