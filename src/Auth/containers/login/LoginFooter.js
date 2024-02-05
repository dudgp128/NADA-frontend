import { Link } from 'react-router-dom';
import { RightArrowSvg } from '../../../icon/Login/RightArrowSvg';
import { FooterWrapper } from '../../../styles/Survey';

const LoginFooter = ({ type }) => {
  return (
    <FooterWrapper $gap={24}>
      <div>
        <Link to={`/register/${type}`}>회원 가입하기</Link>
        <RightArrowSvg />
      </div>
      <div>
        <Link>아이디/비밀번호 찾기</Link>
        <RightArrowSvg />
      </div>
    </FooterWrapper>
  );
};

export default LoginFooter;
