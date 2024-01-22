/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, Form, Input } from "antd";
import { useLoginMutation } from "../redux/auth/api/authAPI";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/auth/authSlice";
import { jwtDecode } from "jwt-decode";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export const Login = () => {
  // Assigning initial username & password value for practice purpose.
  const username = "A-0001";
  const password = "admin123";
  const dispatch = useAppDispatch();
  const [login, { error }] = useLoginMutation();
  if (error) {
    console.log("Error Found", { error });
    return <p style={{ color: "red" }}>Error Found</p>;
  }

  const onFinish = async (values: any) => {
    const res = await login(values).unwrap();
    const token = res.data.accessToken;
    const decode = jwtDecode(token);

    dispatch(setUser({ user: decode, token }));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo); // is any error found while submit the form will get error.
  };
  return (
    <section style={{ height: "100%", alignSelf: "center" }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          initialValue={username}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          initialValue={password}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};
