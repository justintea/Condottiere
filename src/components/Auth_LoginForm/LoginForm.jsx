import { Button, Checkbox, Form, Input } from "antd";
import * as usersService from "../../utilities/usersService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setUser }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const user = await usersService.logIn(values);
      setUser(user);
      navigate("/");
    } catch {
      //? User-error validation #1
      setError(
        "The email and password you specified are invalid. Please try again."
      );
    }
  };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  //   setError("The email and password you specified are invalid. Please try again.");
  // };

  return (
    <>
      <h3> Login </h3>
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
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox >Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button style={{ backgroundColor: "#01628f" }} type="primary" htmlType="submit">
            Login
          </Button>

          {/* //? User-error validation #2 */}
          <p className="error-message" style={{ color: "red" }}>
            &nbsp;{error}
          </p>
        </Form.Item>
      </Form>
    </>
  );
}

//* old code
/* <div className="form-container">
         J: i want to import styles, ask tomorrow 
        <form>
          {/* <h2> Login</h2>
          <label>Email</label>
          <input type="email" required />
          <br />
          <br />

          <label>Password</label>
          <input type="password" required />
          <br />
          <br />

          <button type="login">Login</button>
          <p>
            <i>Don't have an account? Sign up now </i>
          </p> 
          {/* J: potentially 'Sign up now' is hyperlink to Signup component 
        //? try AUI code
      
        </form>
      </div> */
