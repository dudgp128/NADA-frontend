/*Header 상단 바를 관리하고 출력함 */
import React, { useState, useEffect, memo } from 'react';
import { Top } from '../styles/Header';
import { HeaderType } from './HeaderType';
import HeaderTypeConfig from './HeaderTypeConfig';
import { useSelector } from 'react-redux';

const Header = () => {
  const bar = useSelector(({ bar }) => bar);
  const {
    headerState: pageStatus,
    text: pageNameStatus,
    position,
  } = bar.headerStatus;
  const [activeHeaders, setActiveHeaders] = useState();
  //현재 상단값의 요소 존재여부값
  const [CurrentStatus, setCurrentStatus] = useState([
    { id: 'Logo', state: false },
    { id: 'Back', state: false },
    { id: 'Texts', state: false },
    { id: 'Bell', state: false },
    { id: 'Menu', state: false },
    { id: 'BellWMenu', state: false },
    { id: 'Post', state: false },
  ]);

  //현재 상태값에 요소 존재여부값 부여하기
  useEffect(() => {
    let copiedStatus = [...CurrentStatus];

    HeaderType.forEach(
      (team) =>
        pageStatus === team.id &&
        ((copiedStatus[0].state = team.logo),
        (copiedStatus[1].state = team.back),
        (copiedStatus[2].state = team.text),
        (copiedStatus[3].state = team.bell),
        (copiedStatus[4].state = team.menu),
        (copiedStatus[5].state = team.BellWMenu),
        (copiedStatus[6].state = team.post)),
    );
    setCurrentStatus(copiedStatus);

    setActiveHeaders(
      CurrentStatus.filter((item) => item.state).map((item) => (
        <React.Fragment key={item.id}>
          <HeaderTypeConfig
            status={item.id}
            pageNameStatus={pageNameStatus}
            position={position}
          />
        </React.Fragment>
      )),
    );
  }, [pageStatus, pageNameStatus]);

  return Boolean(pageStatus) && <Top>{activeHeaders}</Top>;
};

// React.memo를 사용하여 Header 컴포넌트를 메모이제이션
export default memo(Header);
