import { Button, Form, Input } from "antd";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AuthPage from "../../../pages/2AuthPage/AuthPage";

export default function PaintforhireForm({ user , setUser }) {
  const [data1PaintSvcs, setData1PaintSvcs] = useState([]);

  useEffect(() => {
    localStorage.setItem("data1Key", JSON.stringify(data1PaintSvcs));
  }, [data1PaintSvcs]);

  const onFinish = (values) => {
    console.log("Success:", values);
    setData1PaintSvcs(values);
    console.log(data1PaintSvcs);
    console.log(localStorage);

    localStorage.setItem("data1Key", JSON.stringify(data1PaintSvcs));
    console.log(user);
    // if ( user === null || undefined) {
    //   <Link to="/login">
    {
      /* <Route path="login" element={<Navigate to="/login" />} /> */
    }
    {
      /* <Route path="login" element={<AuthPage user={user} setUser={setUser} />} /> */
    }

    {
      /* </Link> */
    }
  };

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 11,
        }}
        wrapperCol={{
          span: 15,
        }}
        style={{
          maxWidth: 350,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Number of models"
          name="numberofModel"
          rules={[
            {
              required: true,
              message:
                "Please input the number of models you require painting.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Size & complexity"
          name="sizeofModel"
          rules={[
            {
              required: true,
              message:
                "Please choose from: Small (28mm bases or smaller), Normal (>28mm), Huge (>70mm). Charges apply accordingly.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Urgency"
          name="urgency"
          rules={[
            {
              required: true,
              message:
                "Please choose from: Urgent (1-3 days), Normal (1-3 weeks), Relaxed (1 month+). Charges apply accordingly.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Link to="/login">
            <Button
              style={{ backgroundColor: "#01628f" }}
              type="primary"
              htmlType="submit"
            >
              Add to cart
            </Button>
          </Link>
        </Form.Item>
      </Form>


    </>
  );
}
