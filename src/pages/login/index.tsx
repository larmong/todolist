import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import { FaKey, FaUser } from 'react-icons/fa';

import { Signup, Title, Wrapper } from './style';
import { LoginType } from 'types/login/types';
import { loginAPI } from 'apis/login';
import LoginButton from 'components/button';

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const [loginForm] = Form.useForm();

  const handleClickLogin = async (values: LoginType) => {
    const { email, password } = values;

    const data = await loginAPI.getLogin({
      email: email,
      password: password,
    });
  };

  return (
    <Wrapper>
      <Title>TODO LIST!</Title>
      <Form form={loginForm} onFinish={handleClickLogin}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: '이메일을 입력해주세요.' },
            {
              type: 'email',
              message: '아이디를 이메일 형식으로 입력해주세요.',
            },
          ]}
        >
          <Input
            className="form-input"
            prefix={<FaUser className="form-input-icon" />}
            placeholder="이메일을 입력해주세요."
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: '비밀번호를 입력해주세요.' },
            { min: 6, message: '비밀번호를 6글자 이상 입력해주세요.' },
          ]}
        >
          <Input.Password
            className="form-input"
            prefix={<FaKey className="form-input-icon" />}
            placeholder="비밀번호를 입력해주세요."
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="ant-btn-reset">
            <LoginButton text="LOGIN" />
          </Button>
        </Form.Item>
      </Form>
      <Signup>
        <span
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </span>
      </Signup>
    </Wrapper>
  );
}
