import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { ToggleContent } from '../components/ToggleContent';

const AlarmSettingPage = () => {
  const layout = {
    display: 'flex',
    flexDirection: 'column',
  };

  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState({
    notice: false,
    date: false,
    badge: false,
    comment: false,
    popular: false,
    recommend: false,
  });

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '알림',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <div className="pageContainer" style={{ backgroundColor: 'white' }}>
      <div style={layout}>
        <ToggleContent
          text={'공지사항'}
          isActive={isActive.notice}
          setIsActive={setIsActive}
        />
        <ToggleContent
          text={'일정 알림'}
          isActive={isActive.date}
          setIsActive={setIsActive}
        />
        <ToggleContent
          text={'뱃지 등록 알림'}
          isActive={isActive.badge}
          setIsActive={setIsActive}
        />
        <ToggleContent
          text={'댓글 알림'}
          isActive={isActive.comment}
          setIsActive={setIsActive}
        />
        <ToggleContent
          text={'인기글'}
          isActive={isActive.popular}
          setIsActive={setIsActive}
        />
        <ToggleContent
          text={'추천활동'}
          isActive={isActive.recommend}
          setIsActive={setIsActive}
        />
      </div>
    </div>
  );
};

export default AlarmSettingPage;
