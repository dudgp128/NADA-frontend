/** usePostImage image를 post하고 path를 반환받는 쿼리 */
import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const usePostImage = () => {
  return useMutation({
    mutationFn: async ({ section, files }) => {
      // FormData 객체를 생성하여 이미지 및 섹션 정보를 담음
      const formData = new FormData();
      formData.append('section', section);

      // 전달받은 이미지 파일들을 FormData에 추가
      files.forEach((file) => {
        formData.append(`file`, file);
      });

      // 서버에 이미지 업로드를 요청하고 응답 데이터를 받아옴
      const { data } = await client.post(`/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // 성공 시 서버에서 받은 데이터를 반환
      return data;
    },
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.log('이미지 불러오기에 실패하였습니다.', error);
    },
  });
};

export default usePostImage;
