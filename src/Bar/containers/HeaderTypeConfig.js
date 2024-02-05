import { useNavigate } from 'react-router-dom';
import useModal from '../../Modal/modules/useModal';
import { Overlap, Img, Textwrapper } from '../styles/Header';

//각 요소에 대한 구현
const HeaderTypeConfig = ({ status, pageNameStatus, position }) => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const openMenu = () => {
    openModal({
      type: 'MenuModal',
      contentType: '글',
      content: ['Share', 'Update', 'Delete', 'Report'],
      position: position,
    });
  };

  const Config = {
    Texts: <Textwrapper>{pageNameStatus}</Textwrapper>,
    Back: (
      <Overlap>
        <Img className="Back" onClick={() => navigate(-1)} />
      </Overlap>
    ),
    Menu: (
      <Overlap>
        <Img className="Menu" onClick={() => openMenu()} />
      </Overlap>
    ),
    Bell: (
      <Overlap>
        <Img className="Bell" />
      </Overlap>
    ),
    BellWMenu: (
      <Overlap>
        <Img className="BellWMenu" />
      </Overlap>
    ),
    Logo: (
      <Overlap>
        <Img className="Logo" />
      </Overlap>
    ),
    Post: (
      <Overlap>
        <button className="Post" type="submit" form={position}>
          완료
        </button>
      </Overlap>
    ),
  };

  return Config[status];
};

export default HeaderTypeConfig;
