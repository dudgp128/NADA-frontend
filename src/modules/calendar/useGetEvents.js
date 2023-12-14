import useEventsQuery from '../queries/EventQuery';
import { useEffect, useMemo, useState } from 'react';

export const useGetEvents = (dateSet) => {
  const email = localStorage.getItem('email');

  const [events, setEvents] = useState([]);

  const { data } = useEventsQuery({
    email: email,
    start: dateSet.start,
    end: dateSet.end,
  });

  const formattedEvents = useMemo(() => {
    if (!data) {
      return [];
    }

    return (data.activities || []).map((e, idx) => ({
      title: e.activityName,
      start: e.startedAt.slice(0, 10),
      end: e.endedAt.slice(0, 10),
      color: `hsl(${(idx * 20) % 350},100%, 75%)`,
    }));
  }, [data]);

  useEffect(() => {
    const MonthEvent = formattedEvents;

    setEvents(MonthEvent);
  }, [data, events]);

  return events;
};
