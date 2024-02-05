/** useDeleteImage Image를 삭제하는 query */
import { useMutation } from '@tanstack/react-query';
import client from '../../lib/api/client';

const useDeleteImage = () => {
  return useMutation({
    mutationFn: ({ imageUrl }) => {
      // 정규표현식을 사용하여 이미지 URL에서 필요한 부분을 추출
      const pattern = /nada\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_.-]+)/;
      const result = imageUrl.match(pattern)[0];

      // 클라이언트를 사용하여 서버에 이미지 삭제 요청을 보냄
      client.delete(`/image`, { params: { imageUrl: result } });
    },
    onSuccess: (data) => {
      console.log('사진이 삭제되었습니다.', data);
    },
    onError: (error) => {
      console.log('사진 삭제에 실패하였습니다.', error);
    },
  });
};

export default useDeleteImage;
