import { Wrapper, Title } from './style';
import { Button, Form, Input, Select } from 'antd';
import SignupButton from 'components/button';

export default function MyPage(): JSX.Element {
  const data = {
    email: 'hanlulu@gamil.com',
    name: '한루루',
    phone: '01011112222',
  };

  const { Option } = Select;
  const [myPageForm] = Form.useForm();

  const handleUpdateUser = async (values: any) => {
    console.log(values);
  };

  return (
    <Wrapper>
      <Form
        form={myPageForm}
        onFinish={handleUpdateUser}
        initialValues={{
          name: data?.name,
          phone: data?.phone,
        }}
      >
        <div className="fix-contents">
          <Title>email</Title>
          <span>{data.email}</span>
        </div>
        <div className="fix-contents">
          <Title>password</Title>
          <SignupButton text="비밀번호 변경" class="line" />
        </div>
        <Form.Item name="name" rules={[{ required: true, message: '이름을 입력해주세요.' }]}>
          <div>
            <Title>name</Title>
            <Input className="form-input" placeholder="이름을 입력해주세요." />
          </div>
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: '핸드폰번호를 입력해주세요.' },
            {
              pattern: /[0-9]/,
              message: '숫자만 입력할 수 있습니다.',
            },
            {
              max: 8,
              message: '최대 8글자까지 입력 가능합니다.',
            },
          ]}
        >
          <div>
            <Title>phone</Title>
            <Input
              className="phone-input"
              addonBefore={
                <Select style={{ width: 100 }}>
                  <Option value="010">010</Option>
                </Select>
              }
            />
          </div>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="ant-btn-reset">
            <SignupButton text="저장하기" />
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
}
