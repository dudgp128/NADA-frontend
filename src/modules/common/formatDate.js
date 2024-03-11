// Date를 여러 포멧으로 반환하는 함수들의 모음

// D-day 계산기
// : 'D+8', 'D-0', 'D-7'
export const calculateDday = (endedAt) => {
  const endDate = new Date(endedAt);
  const timeDiff = endDate - new Date();
  const result = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return result >= 0 ? `- ${result}` : `+ ${-result}`;
};

// 년(year), 월(month) 추출하기
// '2023.02'. '2024.02'
export const YYYYdotMM = (inputDate) => {
  if (inputDate === '') {
    inputDate = new Date();
  }
  const dateObject = new Date(inputDate);
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');

  return `${year}.${month}`;
};

// 년(year), 월(month), 일(day) 추출하기
export const formatDate = (start, end) => {
  let startDate = new Date(start);
  let endDate = new Date(end);
  return `${startDate.getFullYear()}년${
    startDate.getMonth() + 1
  }월 ${startDate.getDate()}일(${startDate.toLocaleDateString('ko-KR', {
    weekday: 'short',
  })}) ~ ${startDate.getFullYear()}년${
    endDate.getMonth() + 1
  }월 ${endDate.getDate()}일(${endDate.toLocaleDateString('ko-KR', {
    weekday: 'short',
  })})`;
};
