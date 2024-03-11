/** ContactModal을 통해 [년, 월] 을 정하는 모달 */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useModal from '../modules/useModal';
import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

const ContactModal = () => {
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const modal = useSelector(({ modal }) => modal);
  const { contentType: name, content: index } = modal;

  return (
    <Layout className="Layout">
      <Header>
        <div onClick={closeModal} className="cancel">
          취소
        </div>
        <div className="title">새로운 메시지</div>
        <div>↑</div>
      </Header>
    </Layout>
  );
};

export default ContactModal;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 350px;
  box-sizing: border-box;
  height: 300px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  & > .cancel {
    ${applyFontStyles({
      font: 'subtitle-02',
      color: 'var(--myspec-primaryblue-1)',
    })};
  }

  & > .title {
    ${applyFontStyles({
      font: 'subtitle-01',
      color: 'var(--myspec-gray-scalegray-900)',
    })};
  }
`;
