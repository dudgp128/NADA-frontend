// 회원가입 또는 로그인 폼을 보여주기
import { InputBox, LoginBtn } from '../../styles/Survey';

const AuthForm = ({ form, onChange, onSubmit }) => {
  return (
    <form className="Frame2" onSubmit={onSubmit}>
      <InputBox style={{ marginBottom: '32px' }}>
        <input
          name="email"
          email={form.email}
          onChange={onChange}
          placeholder="아이디"
          required
        />
        <input
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
          required
        />
      </InputBox>
      <LoginBtn>
        <div>로그인</div>
      </LoginBtn>
    </form>
  );
};
export default AuthForm;
