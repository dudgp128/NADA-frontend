import { FooterWrapper } from '../../../styles/Survey';

const SocialLogin = () => {
  return (
    <FooterWrapper $gap={10}>
      <div className="LoginBtn" style={{ background: 'yellow ' }}>
        <img
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/beff57bde8d3f4caef4459378547b83e/img/vector-1.png"
        />
        <div>카카오 로그인</div>
      </div>
      <div className="LoginBtn" style={{ background: 'black', color: 'white' }}>
        <img
          height="19px"
          width="15px"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/beff57bde8d3f4caef4459378547b83e/img/vector.png"
        />
        <div>Apple 로그인</div>
      </div>
    </FooterWrapper>
  );
};

export default SocialLogin;
