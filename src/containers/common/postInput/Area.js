/** Area 글작성 페이지에 Area 출력하는 컨테이너  */
import { TextInput } from '../../../Community/styles/PostWriteStyle';

export const Area = ({ onChange, inputValue }) => {
  return (
    <TextInput>
      <div className="area box">
        장소
        <div className="inputBox flex">
          <input
            className="area"
            name="area"
            onChange={onChange}
            value={inputValue.area}
            placeholder="활동 장소를 입력하세요."
          />
        </div>
      </div>
    </TextInput>
  );
};
