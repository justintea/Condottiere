import { Button, Form, Input } from "antd";
import { signUp } from "../../utilities/0usersService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm({ setUser }) {
  //* signupform's data is a state
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });
  // const [data, setData] = useState(null);
  const Navigate = useNavigate();


  //* AUI's onSubmit function
  const onFinish = async (values) => {
    // event.preventDefault();
    console.log("Success:", values);

    let dataObject = {
      username: values.username,
      email: values.email,
      password: values.password,
      // admin: false,            //? 15/2 2330: removed. too insecure to put admin user declaration here
    };
    // console.log(dataObject);          
    setData(dataObject); 
    // console.log(data);

    const user = await signUp(dataObject);
    // console.log(' what is user', user);
    setUser(user);

    if (user !== null) { 
      Navigate("/user");
    } 
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //* Confirm-password validation code within Return
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
      
        <h2 style={{ fontFamily: "Palatino Linotype", margin: '5% 0 5% 9%' }}> Sign Up - Bring your tabletop adventures to life today!</h2>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please create your username",
            },
            {
              min: 4,
              message: "Username must be at least 4 characters"
            },
            {
              max: 15,
              message: "Your username exceeds the maximum character limit allowed"
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email address",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              min: 8, 
              message: "Password must be at least 8 characters.",
            },
            {
              // pattern: /[a-zA-Z0-9~!@#$%^&*()_+-=]/,
              pattern: /(?=.*[a-zA-Z])(?=.*\d)(?=.*[-!@#$%^&*()_+-=])/,
              message: "Password must be alphanumeric (include at least a number and an alphabet)."
            }
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <br></br>
          <Button style={{ backgroundColor: "#01628f", margin: '0 0 10% 81%' }} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}