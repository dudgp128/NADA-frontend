/** Insitute 글작성 페이지에 Insitute 출력하는 컨테이너  */
import { useEffect, useState } from 'react';
import { TextInput } from '../../../Community/styles/PostWriteStyle';
import { LinkSvg } from '../../../icon/LinkSvg';

export const Insitute = ({ onChange, inputValue }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(Boolean(inputValue.instituteURL));
  }, [inputValue.instituteURL]);

  return (
    <TextInput>
      <div className="group box">
        기관
        <div className="inputBox flex">
          <input
            className="institute"
            onChange={onChange}
            name="institute"
            value={inputValue.institute}
            placeholder="주최 기관명을 작성해주세요."
          />
          <div className="urlBox">
            <LinkSvg size={14} isActive={isActive} />
            <input
              className={isActive ? 'instituteURL isActive' : 'instituteURL'}
              onChange={onChange}
              name="instituteURL"
              value={inputValue.instituteURL}
              placeholder="주최 기관 홈페이지를 입력하세요. "
            />
          </div>
        </div>
      </div>
    </TextInput>
  );
};
