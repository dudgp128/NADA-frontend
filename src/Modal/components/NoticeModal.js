/** NoticeModal 삭제 또는 신고가 정상적으로 되었음을 알리는 모달 */
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useModal from '../modules/useModal';
import { Layout } from '../../Community/styles/NoticeModalStyle';
import BottomButton from './usedInModal/BottomButton';

const NoticeModal = () => {
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const modal = useSelector(({ modal }) => modal);
  const { contentType, actionType } = modal;

  const onDelete = () => {
    closeModal();
    navigate(-1);
  };

  const Button = () => {
    const isDeleteContent = actionType === '삭제' && contentType === '글';
    const cancelText = '확인';

    return (
      <BottomButton
        cancelText={cancelText}
        cancelAct={isDeleteContent && onDelete}
      />
    );
  };

  return (
    <Layout>
      <div className="text">
        {contentType}이 {actionType}되었어요
      </div>
      <div className="border-2" />
      <img
        className="img"
        alt="Check"
        src="https://c.animaapp.com/jSDFsaX0/img/check.svg"
      />
      <div className="border-2" />
      <Button />
    </Layout>
  );
};

export default NoticeModal;
