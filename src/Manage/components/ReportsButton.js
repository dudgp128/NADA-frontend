import { TextWarpper } from '../../Community/styles/SelectButton';

export const ReportsButton = ({ showReports, setShowReports }) => {
  const setReport = () => {
    setShowReports(!showReports);
  };

  return (
    <TextWarpper onClick={setReport} className={showReports ? 'isActive' : ''}>
      신고된 게시글
    </TextWarpper>
  );
};
