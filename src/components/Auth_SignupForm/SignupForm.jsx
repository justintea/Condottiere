import { Button, Form, Input } from "antd";
import { signUp } from "../../utilities/usersService";
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
  const navigate = useNavigate();


  //* AUI's onSubmit function
  const onFinish = async (values) => {
    // event.preventDefault();
    console.log("Success:", values);

    let dataObject = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    // console.log(dataObject);          // maybe working...?
    setData(dataObject); // maybe working...?
    // console.log(data);

    const user = await signUp(dataObject);
    // console.log(' what is user', user);
    setUser(user);

    navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //* Confirm-password validation code
  // Saw AUI documentation. For AUI, is written within the Form.item. See below.

  return (
    <>
      <h3> Sign Up - Bring your tabletop adventures to life today!</h3>
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

        {/*  
          ORIGINAL AUI FIELDS W/O CONFIRM-PW VALIDATION 

          <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please create a password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm"
          name="passwordconfirm"
          rules={[
            {
              required: true,
              message: "Please confirm your password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item> */}

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
          <Button style={{ backgroundColor: "#01628f" }} type="primary" htmlType="submit">
            {/* <Button type="primary" htmlType="submit" disabled={disable} > */}
            {/* <Button type="primary" htmlType="submit" disabled={disable} onChange={handleChange}> */}
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

//* old code
/* <form>
        <h2>Signup Form</h2>
        <label>Name</label>
        <input required /> 
        <br />

        <label>Email</label>
        <input required /> 
        <br />

        <label>Password</label>
        <input required /> 
        <br />

        <label>Confirm</label>
        <input required /> 
        <br />

      </form>
     */
