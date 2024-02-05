/** Title 글작성 페이지에 Title을 출력하는 컨테이너  */
import { TitleStyle } from '../../../Community/styles/PostWriteStyle';

export const Title = ({ name, onChange, inputValue }) => {
  return (
    <TitleStyle>
      <input
        className="div"
        name={name}
        onChange={onChange}
        value={inputValue}
        placeholder="제목을 입력하세요"
        required
      />
    </TitleStyle>
  );
};
