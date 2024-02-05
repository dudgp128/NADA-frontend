/**menuModalType 메뉴모달에 사용되는 행동 관리 컴포넌트 */
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toast } from '../../components/common/Toast';
import PrintCenteredText from '../components/usedInModal/PrintCenteredText';
import useModal from './useModal';
import useSetButtonActive from '../../modules/common/SetButtonActive';
import {
  changeField,
  commentSelector,
} from '../../Community/modules/redux/comment';

export const MenuTypeConfig = (content) => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setButtonActive = useSetButtonActive();
  const modal = useSelector(({ modal }) => modal);
  const { contentType, position } = modal;
  const commentContent = useSelector(commentSelector('content'));

  const toReport = () => {
    openModal({
      type: 'AskModal',
      title: `${contentType}을 신고할까요?`,
      contentType: contentType,
      actionType: '신고',
      content: `신고한 ${contentType}은 서비스 운영원칙에 따라 처리돼요`,
      position: position,
    });
  };

  const toDelete = () => {
    openModal({
      type: 'AskModal',
      title: `${contentType}을 삭제할까요?`,
      contentType: contentType,
      actionType: '삭제',
      content: `한 번 삭제한 ${contentType}은 복구할 수 없어요`,
      position: position,
    });
  };

  const toShare = () => {
    openModal({
      type: 'ShareModal',
      actionType: '공유',
      position: position,
    });
  };

  const toUpdate = () => {
    if (position === 'activity') {
      setButtonActive();
      navigate('/activity/ActWrite');
    }
    if (position === 'post') {
      setButtonActive();
      navigate('/community/PostWrite');
    }
    if (position === 'comment' || position === 'reply') {
      dispatch(changeField({ form: 'position', value: position }));
      dispatch(changeField({ form: 'isUpdating', value: true }));
      dispatch(changeField({ form: 'isReplying', value: false }));
    }
    closeModal();
  };

  const toCopy = () => {
    Toast({ text: '댓글 내용이 복사되었어요' });
    closeModal();
  };

  const Config = {
    Report: <PrintCenteredText print={'신고하기'} act={toReport} />,
    Delete: <PrintCenteredText print={'삭제하기'} act={toDelete} />,
    Share: <PrintCenteredText print={'공유하기'} act={toShare} />,
    Update: <PrintCenteredText print={'수정하기'} act={toUpdate} />,
    Copy: (
      <CopyToClipboard text={commentContent}>
        <div>
          <PrintCenteredText
            print={'댓글 내용 복사하기'}
            act={() => toCopy()}
          />
        </div>
      </CopyToClipboard>
    ),
  };

  return Config[content];
};
