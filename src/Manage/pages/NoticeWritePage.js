import { useState } from 'react';
import { LayoutStyle } from './HomePage.';
import Header from '../containers/Header';
import usePostNotice from '../modules/queries/usePostNotice';
import { applyFontStyles } from '../../styles/fontStyle';

const NoticeWritePage = () => {
  const { mutate } = usePostNotice();
  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  const form = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    ...applyFontStyles({
      font: 'body-02',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };
  const inputstyle = {
    width: '300px',
    ...applyFontStyles({
      font: 'body-01',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };
  const onChange = (event) => {
    const { value, name } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ title: input.title, content: input.content });
    setInput({
      title: '',
      content: '',
    });
  };

  return (
    <LayoutStyle>
      <Header text={'공지사항 게시글'} url={''} />
      <form style={form} onSubmit={onSubmit}>
        제목
        <input
          id="title"
          name="title"
          style={inputstyle}
          value={input.title}
          onChange={onChange}
          required
        />
        내용
        <textarea
          id="content"
          name="content"
          style={inputstyle}
          value={input.content}
          onChange={onChange}
          required
        />
        <button>등록</button>
      </form>
    </LayoutStyle>
  );
};

export default NoticeWritePage;
