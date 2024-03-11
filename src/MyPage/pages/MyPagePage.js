import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { Title } from '../components/Title';
import { Content } from '../components/Content';
import { ProfileStyle } from '../../Community/styles/CommentStyle';
import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const MyPageProfile = styled(ProfileStyle)`
  & > .image {
    width: ${(prop) => `${prop.imgSize}px`};
    height: ${(prop) => `${prop.imgSize}px`};
  }

  & > .name {
    ${applyFontStyles({ font: 'title-01' })}
  }
`;

const MyPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'Bell',
        text: 'MY',
        isShowBottom: true,
      }),
    );
  }, []);

  return (
    <div className="pageContainer">
      <div>
        <Content url={'/myPage/profile'}>
          <MyPageProfile imgSize={54}>
            <div className="image" width={'54px'} height={'54px'} />
            <div className="name">{'김나다'}</div>
          </MyPageProfile>
        </Content>
      </div>
      <div>
        <Title text={'커뮤니티'} />
        <Content url={'/myPage/myPost'} text={'내가 작성한 글'} />
        <Content url={'/mypage'} text={'내가 댓글 단 글'} />
      </div>
      <div>
        <Title text={'설정'} />
        <Content url={'/mypage/alarmSetting'} text={'알림'} />
        <Content url={'/mypage'} text={'관심 분야'} />
      </div>
      <div>
        <Title text={'이용안내'} />
        <Content url={'/mypage/contact'} text={'문의하기'} />
        <Content url={'/myPage/notice'} text={'공지사항'} />
        <Content
          url={'/mypage'}
          text={'버전정보'}
          version={'1.5.22(2023121021)'}
        />
        <Content url={'/myPage/termsOfUse'} text={'이용약관'} />
      </div>
      <div>
        <Title text={'기타'} />
        <Content url={'/mypage'} text={'로그아웃'} />
        <Content url={'/mypage'} text={'탈퇴하기'} />
      </div>
    </div>
  );
};

export default MyPage;
