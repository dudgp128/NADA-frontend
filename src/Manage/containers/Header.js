import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkButton } from '../components/LinkButton';
import { applyFontStyles } from '../../styles/fontStyle';
import { changeField } from '../../modules/redux/postWrite';
import { AngleBracket } from '../../icon/AngleBracket';

const Header = ({ text, url }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const header = {
    padding: '20px',
    ...applyFontStyles({
      font: 'title-02',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };

  const link = {
    padding: '12px 15px',
    display: 'flex',
    alignItems: 'center',
    textDecorationLine: 'none',
    gap: '11px',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: 'var(--myspec-gray-scalegray-200)',
    ...applyFontStyles({
      font: 'title-02',
      color: 'var(--myspec-gray-scalegray-900)',
    }),
  };

  const MoveToWrite = () => {
    dispatch(changeField({ form: 'method', key: 'isSubmit', value: true }));
  };

  return (
    <>
      <div style={header}>{text}</div>
      <div style={link} onClick={() => navigate(-1)}>
        뒤로 가기
        <AngleBracket Direction={'left'} />
      </div>
      {url && (
        <LinkButton onClick={MoveToWrite} url={url} text={'게시글 작성하기'} />
      )}
    </>
  );
};

export default Header;
