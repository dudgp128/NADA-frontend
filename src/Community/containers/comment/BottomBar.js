/** BottomBar 댓글 화면에서 보여지는 하단바 */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Bar } from '../../styles/CommentBarStyle';
import usePostComment from '../../modules/queries/usePostComment';
import usePatchComment from '../../modules/queries/usePatchComment';
import getDataForApi from '../../../modules/common/getDataForApi';
import NoticeBar from './NoticeBar';
import { InputBar } from '../../styles/CommentBarStyle';
import { ArrowSvg } from '../../../icon/ArrowSvg';
import { initializeForm } from '../../modules/redux/comment';

export const BottomBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const { mutate: post } = usePostComment();
  const { mutate: update } = usePatchComment();
  const comment = useSelector(({ comment }) => comment.comment);
  const { position, content, isReplying, isUpdating, userName } = comment;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!!inputValue);
  }, [inputValue]);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setInputValue(isUpdating ? content : '');
  }, [isUpdating]);

  const sendComment = () => {
    const { url, idData } = getDataForApi({
      position: position,
      comment: comment,
    });

    if (isUpdating) {
      update({ url, _id: idData, content: inputValue });
    } else {
      post({ url, content: inputValue });
    }

    dispatch(initializeForm());
    setInputValue('');
  };

  return (
    <Bar>
      {isReplying && <NoticeBar name={userName} isReply={true} />}
      {isUpdating && <NoticeBar isReply={false} />}
      <InputBar>
        <div className="input">
          <div className="text">
            {isReplying && <div className="name">@{userName}</div>}
            <input
              className="wrapper"
              onChange={onChange}
              value={inputValue}
              placeholder="댓글을 입력하세요"
            />
          </div>
        </div>
        <ArrowSvg onClick={sendComment} isActive={isActive} />
      </InputBar>
    </Bar>
  );
};
