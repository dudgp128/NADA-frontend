/** AskModal 게시글 신고 또는 삭제를 물어보는 모달 */
import { useSelector } from 'react-redux';
import useModal from '../modules/useModal';
import BottomButton from './usedInModal/BottomButton';
import { Layout } from '../../Community/styles/NoticeModalStyle';
import getDataForApi from '../../modules/common/getDataForApi';
import useDeleteId from '../../modules/queries/useDeleteId';
import useReportId from '../../modules/queries/useReportId';
import { Toast } from '../../components/common/Toast';

const AskModal = () => {
  const { openModal, closeModal } = useModal();
  const { mutate: toDelete } = useDeleteId();
  const { mutate: report } = useReportId();

  const modal = useSelector(({ modal }) => modal);
  const { title, contentType, actionType, content, position } = modal;
  const postData = useSelector(({ postData }) => postData.postData);
  const comment = useSelector(({ comment }) => comment.comment);

  const useAct = () => {
    if (actionType === '삭제') {
      const config = getDataForApi({ position, postData, comment });
      toDelete({
        url: config.url,
        _id: config.idData,
      });
    }
    if (actionType === '신고') {
      const config = getDataForApi({
        position,
        postData,
        comment,
        isReport: true,
      });
      report({
        url: config.url,
        _id: config.idData,
      });
    }
    if (actionType === '숨기기') {
      Toast({ text: `숨겨진 뱃지는 마이 페이지에서 확인할 수 있습니다.` });
      closeModal();
    } else if (modal.position === 'comment' || modal.position === 'reply') {
      Toast({ text: `댓글이 ${actionType}되었어요` });
      closeModal();
    } else {
      openModal({ type: 'NoticeModal', contentType, actionType });
    }
  };

  return (
    <Layout>
      <div className="title">{title}</div>
      <div className="border" />
      <p className="content">{content}</p>
      <div className="border-2" />
      {BottomButton({
        actText: actionType,
        act: useAct,
        isRed: true,
      })}
    </Layout>
  );
};

export default AskModal;
