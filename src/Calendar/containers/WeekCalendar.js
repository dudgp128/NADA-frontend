import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../styles/Calendar.scss';
import '../styles/WeekCalendar.scss';
import TodayBox from '../components/today';
import EventBox from '../components/event';
import { useGetInterested } from '../../Acitivity/modules/queries/useGetInterested';

const WeekCalendar = () => {
  // 서버에서 가져온 데이터
  const [dateSet, setDateSet] = useState({ start: '', end: '' });
  const { data: events, isError } = useGetInterested(dateSet);

  return (
    <>
      <div className="WeekCalendarWrapper">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView={'dayGridWeek'}
          headerToolbar={{ start: 'title', center: null, end: null }}
          titleFormat={{ year: 'numeric', month: 'short' }}
          height={'215px'}
          locale={'ko'}
          dayHeaderFormat={{ weekday: 'short' }}
          dayCellContent={(info) => {
            let day = info.date.toDateString().split(' ')[2];
            return info.isToday ? <TodayBox text={day} /> : day;
          }}
          eventContent={(info) => <EventBox text={info.event.title} />}
          events={isError ? null : events}
          datesSet={(dateInfo) => {
            setDateSet((prevDateSet) => ({
              ...prevDateSet,
              start: dateInfo.start,
              end: dateInfo.end,
            }));
          }}
        />
      </div>
    </>
  );
};

export default React.memo(WeekCalendar);
