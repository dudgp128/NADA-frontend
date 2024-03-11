import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useModal from '../../Modal/modules/useModal';
import styled from 'styled-components';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { applyFontStyles } from '../../styles/fontStyle';
import { BottomButton } from '../components/BottomButton';

const ContactPage = () => {
  const dispatch = useDispatch();
  const { openModal } = useModal();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '문의사항',
        isShowBottom: false,
      }),
    );
  }, []);

  const openContactModal = () => {
    openModal({ type: 'ContactModal' });
  };

  return (
    <div className="pageContainer" style={{ backgroundColor: 'white' }}>
      <Contact>
        <div className="title">궁금하신 점을 문의해주세요</div>
        <div className="content">
          이용 중 불편한 점이나 문의사항을 보내주세요
          <br /> 확인 후 빠르게 답변드릴게요
          <br /> 평일 10:00 ~ 18:00 (토,일요일, 공휴일 휴무)
        </div>
      </Contact>
      <div style={{ height: '400px' }} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BottomButton text={'이메일 보내기'} act={openContactModal} />
      </div>
    </div>
  );
};

export default ContactPage;

const Contact = styled.div`
padding:15px;
display:flex;
flex-direction: column;
gap:16px;

  & > .title {
    font-family: 'Pretendard-Bold', Helvetica;
    font-size: 24px;
    font-style: normal;
    font-weight:: 700;
    letter-spacing: 0px;
    line-height: 150%;
  }
  &>.content{
    ${applyFontStyles({
      font: 'body-02',
      color: 'var(--myspec-gray-scalegray-600)',
    })}
  }
`;
