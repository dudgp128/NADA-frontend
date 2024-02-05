/* useGetCommunity community의 list를 가져오는 쿼리 */
import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';

export const useGetPost = ({ _id }) => {
  return useQuery(['getPost'], async () => {
    const { data } = await client.get('/community/post', {
      params: { _id: _id },
    });
    return data.post;
  });
};

export const useGetPostList = ({ filter }) => {
  return useQuery(
    ['getPostList', filter],
    async () => {
      const { buttonSelect, subButtonSelect } = filter;
      if (buttonSelect && subButtonSelect) {
        const { region, field, category } = subButtonSelect;
        const resp = await client.get('/community/post/list', {
          params: {
            mainCategory: buttonSelect.maincategory,
            region: region,
            field: field,
            category: category,
          },
        });

        return resp.data.posts.reverse();
      }
    },
    {
      retry: (failureCount, error) => {
        if (error.response && error.response.status === 404) {
          return false; // 리트라이 하지 않음
        }
        // 다른 에러는 기본적으로 리트라이
        return failureCount < 3; // 여기서는 최대 3번까지 리트라이
      },
      select: (data) => {
        return (data || []).map((item) => ({
          ...item,
          imageUrl: item.imageUrl[0],
        }));
      },
    },
  );
};

// 인기 게시글을 불러오기
export const useGetTopPost = () => {
  return useQuery({
    queryKey: ['getTopPost'],
    queryFn: async () => {
      const { data } = await client.get('/community/topPost');
      return data.posts;
    },
    staleTime: 9000000,
    select: (data) =>
      (data || []).map(({ _id, title, category, imageUrl }) => ({
        _id,
        title,
        category,
        imageUrl: imageUrl[0],
      })),
  });
};
