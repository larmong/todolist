import { Button, Form, Input, Select } from 'antd';

import { Title, Wrapper } from './style';
import SignupButton from 'components/button';

export default function Signup(): JSX.Element {
  const { Option } = Select;
  const [signupForm] = Form.useForm();

  const handleClickSignup = async (values: any) => {
    console.log(values);
  };

  return (
    <Wrapper>
      <Form form={signupForm} onFinish={handleClickSignup}>
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
          <div>
            <Title>email</Title>
            <div className="id-line">
              <Input className="form-input" placeholder="이메일을 입력해주세요." />
              <SignupButton text="중복확인" class="line" />
            </div>
          </div>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: '비밀번호를 입력해주세요.' },
            { min: 6, message: '비밀번호를 6글자 이상 입력해주세요.' },
          ]}
        >
          <div>
            <Title>password</Title>
            <Input.Password className="form-input" placeholder="비밀번호를 입력해주세요." />
          </div>
        </Form.Item>
        <Form.Item name="name" rules={[{ required: true, message: '이름을 입력해주세요.' }]}>
          <div>
            <Title>name</Title>
            <Input className="form-input" placeholder="이름을 입력해주세요." />
          </div>
        </Form.Item>
        <Form.Item name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
          <div>
            <Title>phone</Title>
            <Input
              addonBefore={
                <Form.Item className="form-input" name="prefix" noStyle>
                  <Select style={{ width: 100 }}>
                    <Option value="010">010</Option>
                  </Select>
                </Form.Item>
              }
              style={{ width: '100%' }}
            />
          </div>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="ant-btn-reset">
            <SignupButton text="SINGUP" />
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
}
