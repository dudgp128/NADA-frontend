import { useQuery } from '@tanstack/react-query';
import client from '../../../lib/api/client';
import { decodeJwtToken } from '../../../Auth/modules/decodeJwtToken';

export const useGetInterested = ({ start, end }) => {
  return useQuery({
    queryKey: ['getEvent'],
    queryFn: async () => {
      const { email } = decodeJwtToken(localStorage.getItem('token'));

      const { data } = await client.get('calendar/bookmark/list', {
        params: { email: email, start: start, end: end },
      });
      return data;
    },
    staleTime: 60000,
    select: (data) =>
      (data.activities || []).map((e, idx) => ({
        title: e.activityName,
        start: e.startedAt.slice(0, 10),
        end: e.endedAt.slice(0, 10),
        color: `hsl(${(idx * 20) % 350},100%, 75%)`,
      })),

    retry: 0, // 404 error는 서버에 해당 기간의 관심 활동이 없을때, 발생합니다.
    staleTime: 5000,
  });
};
