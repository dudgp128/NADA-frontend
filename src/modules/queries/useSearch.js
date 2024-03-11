// useSearch 검색을 위한 쿼리
import { useQuery } from '@tanstack/react-query';
import client from '../../lib/api/client';

export const useSearchActivity = ({ focus, value }) => {
  return useQuery({
    queryKey: ['searchActivityQuery', focus, value],
    queryFn: async () => {
      if (value) {
        const keys = {
          제목: 'activityName',
          본문: 'content',
          작성자: 'groupName',
        };
        const { data } = await client.get('/activity/search', {
          params: { [keys[focus]]: value },
        });
        return data.result;
      }
    },
    select: (data) =>
      (data || []).map(
        ({
          _id,
          activityName,
          mainImageUrl,
          region,
          field,
          category,
          content,
        }) => ({
          _id,
          title: activityName,
          imageUrl: mainImageUrl,
          region,
          field,
          category,
          content,
        }),
      ),
  });
};

export const useSearchCommunity = ({ mainCategory, focus, value }) => {
  return useQuery({
    queryKey: ['searchCommunityQuery', mainCategory, focus, value],
    queryFn: async () => {
      if (mainCategory && value) {
        const keys = {
          제목: 'title',
          본문: 'content',
          작성자: 'userName',
        };

        const { data } = await client.get('/community/post/search', {
          params: {
            mainCategory: mainCategory,
            searchBy: keys[focus],
            searchWord: value,
          },
        });
        return data.posts;
      }
    },
    select: (data) =>
      (data || []).map(
        ({ _id, title, imageUrl, region, field, category, content }) => ({
          _id,
          title,
          imageUrl: imageUrl[0] ? imageUrl[0] : '',
          region,
          field,
          category,
          content,
        }),
      ),
  });
};
