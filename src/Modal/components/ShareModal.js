/** ShareModal 공유 방법을 선택하는 모달 */
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useModal from '../modules/useModal';
import { Layout } from '../../Community/styles/NoticeModalStyle';
import BottomButton from './usedInModal/BottomButton';
import { Toast } from '../../components/common/Toast';
import { LinkSvg } from '../../icon/LinkSvg';
//import { KakaoSvg } from '../../../icon/KakaoSvg';
//카카오톡 공유 기능은 서비스 출시 이후에 가능함으로 현재는 주석처리 해두었습니다.

const ShareModal = () => {
  const { closeModal } = useModal();
  const url = window.location.href;

  const copyLink = () => {
    Toast({ text: '게시글 링크가 복사되었어요' });
    closeModal();
  };

  return (
    <Layout>
      <div className="title">공유하기</div>
      <div className="border-2" />
      <CopyToClipboard text={url} onCopy={() => copyLink()}>
        <div className="link" onClick={() => copyLink()}>
          <LinkSvg />
          <div className="text">링크 복사하기</div>
        </div>
      </CopyToClipboard>
      {/* <div className="kakaO">
        <KakaoSvg />
        <div className="text">카카오톡 공유하기</div>
      </div> */}

      <div className="border-2" />
      <BottomButton cancelText={'닫기'} />
    </Layout>
  );
};

export default ShareModal;
