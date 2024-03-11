/** MonthModal을 통해 [년, 월] 을 정하는 모달 */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import '../../Badge/styles/MonthPicker.scss';
import useModal from '../modules/useModal';
import BottomButton from './usedInModal/BottomButton';
import styled from 'styled-components';
import ko from 'date-fns/locale/ko';
import { changeIndexField } from '../../Badge/modules/redux/badge';
import { useEffect } from 'react';

registerLocale('ko', ko);

const MonthModal = () => {
  const [date, setDate] = useState(new Date());

  // 1년 후까지
  const [maxMonth, setMaxMonth] = useState(
    new Date(
      new Date().getFullYear() + 1,
      new Date().getMonth(),
      new Date().getDate(),
    ),
  );
  // 100년 전부터
  const [minMonth, setMinMonth] = useState(
    new Date(
      new Date().getFullYear() - 100,
      new Date().getMonth(),
      new Date().getDate(),
    ),
  );

  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const modal = useSelector(({ modal }) => modal);
  const { contentType: name, content: index } = modal;

  const { started, ended } = useSelector(
    ({ badge }) => badge.activities[index],
  );

  useEffect(() => {
    if (name === 'started') {
      setMaxMonth(date);
      if (ended) {
        setMaxMonth(new Date(ended));
      }
    } else if (name === 'ended') {
      if (started) {
        setMinMonth(new Date(started));
      }
    }
  }, [started, ended]);

  const setStatus = () => {
    dispatch(
      changeIndexField({
        type: 'activities',
        index,
        name,
        value: date.toISOString(),
      }),
    );
    closeModal();
  };

  return (
    <Layout className="Layout">
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)} // 여기서 dateformat 수정하기
        dateFormat="yyyy/MM"
        showMonthYearPicker
        showFullMonthYearPicker
        inline
        locale={'ko'}
        minDate={minMonth}
        maxDate={maxMonth}
      >
        <BottomButton actText={'확인'} act={setStatus} />
      </DatePicker>
    </Layout>
  );
};

export default MonthModal;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
