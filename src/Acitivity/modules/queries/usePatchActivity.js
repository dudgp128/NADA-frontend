/* usePatchManage 관리자 게시물 등록을 수행하는 쿼리 */
import client from '../../../lib/api/client';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const usePatchActivity = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({
      _id,
      activityName,
      groupName,
      field,
      category,
      region,
      institute,
      instituteURL,
      area,
      content,
      mainImageUrl,
      extraImageUrl,
      startedAt,
      endedAt,
    }) =>
      client.patch(`/activity`, {
        activityName: activityName,
        groupName: groupName,
        field: field,
        category: category,
        region: region,
        institute: institute,
        instituteURL: instituteURL,
        area: area,
        content: content,
        mainImageUrl: mainImageUrl,
        extraImageUrl: extraImageUrl,
        startedAt: startedAt,
        endedAt: endedAt,
      }),
    onSuccess: (data) => {
      console.log('게시물이 수정되었습니다.', data);
      alert('등록되었습니다.');
      navigate('/manage/Activity');
    },
    onError: (error) => {
      console.log('게시물 수정에 실패하였습니다.', error);
      alert('실패.');
      navigate('/manage/Activity');
    },
  });
};

export default usePatchActivity;
