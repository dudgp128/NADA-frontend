import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../modules/redux/bar';
import { AlarmHeader } from '../containers/AlarmHeader';
import { Content } from '../components/Content';
import styled from 'styled-components';

const AlarmPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '알람',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <>
      <div className="pageContainer">
        <AlarmHeader />
        <ContentList>
          <Content notCheck={true} />
          <Content notCheck={false} />
        </ContentList>
      </div>
    </>
  );
};

export default AlarmPage;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
`;
