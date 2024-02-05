/* usePostManage 관리자 게시물 등록을 수행하는 쿼리 */
import client from '../../../lib/api/client';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Toast } from '../../../components/common/Toast';

const usePostActivity = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({
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
      client.post(`/activity`, {
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
      console.log('게시물이 등록되었습니다.', data);
      navigate(-1);
      Toast({ text: '등록되었습니다.' });
    },
    onError: (error) => {
      console.log('게시물 등록에 실패하였습니다.', error);
      navigate(-1);
      Toast({ text: '오류 발생!' });
    },
  });
};

export default usePostActivity;
