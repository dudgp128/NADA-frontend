/** usePostNotice 공지사항을 post하는 쿼리 */
import { useMutation } from '@tanstack/react-query';
import client from '../../../lib/api/client';

const usePostNotice = () => {
  return useMutation({
    mutationFn: ({ title, content }) =>
      client.post(`/mypage/notice`, {
        title: title,
        content: content,
      }),
    onSuccess: (data) => {
      console.log('공지사항이 등록되었니다.', data);
    },
    onError: (error) => {
      console.log('공지사항 등록에 실패하였습니다.', error);
    },
  });
};

export default usePostNotice;
