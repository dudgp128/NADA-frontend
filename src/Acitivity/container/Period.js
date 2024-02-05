/** Period 글작성 페이지에 Period을 출력하는 컨테이너  */
import { TextInput } from '../../Community/styles/PostWriteStyle';
import useModal from '../../Modal/modules/useModal';
import getDateFormat from '../../modules/common/getDateFormat';

export const Period = ({ startedAt, endedAt }) => {
  const { openModal } = useModal();
  const openCalendar = () => {
    openModal({ type: 'CalendarModal' });
  };

  return (
    <TextInput>
      <div className="duration box">
        접수 기간
        <div className="inputBox">
          <input
            className="date"
            name="startedAt"
            placeholder="0000.00.00"
            onClick={openCalendar}
            value={getDateFormat({
              preDate: startedAt,
              type: 'number',
            })}
            readOnly
            required
          />
          부터
          <input
            className="date"
            name="endedAt"
            placeholder="0000.00.00"
            onClick={openCalendar}
            value={getDateFormat({
              preDate: endedAt,
              type: 'number',
            })}
            readOnly
          />
          까지
        </div>
      </div>
    </TextInput>
  );
};
