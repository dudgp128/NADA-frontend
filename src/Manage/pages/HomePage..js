/*ManageHome 관리자용 메인 페이지 */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';
import { Img } from '../../Bar/styles/Header';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { LinkButton } from '../components/LinkButton';

const ManageHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <LayoutStyle>
      <Img className="Logo" />
      <List>
        <div className="title">관리자님 안녕하세요!</div>
        <LinkButton url={'/manage/activity'} text={'활동 게시글 관리하기'} />
        <LinkButton
          url={'/manage/community'}
          text={'커뮤니티 게시글 관리하기'}
        />
        <LinkButton url={'/manage/notice'} text={'공지사항 게시글 관리하기'} />
      </List>
    </LayoutStyle>
  );
};

export default ManageHome;

export const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 8px;
`;

export const List = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 9px;
  height: 500px;
  top: 80px;

  & > .title {
    padding: 12px 15px;
    ${applyFontStyles({
      font: 'title-01',
      color: 'var(--myspec-gray-scalegray-900)',
    })};
  }
}
`;
