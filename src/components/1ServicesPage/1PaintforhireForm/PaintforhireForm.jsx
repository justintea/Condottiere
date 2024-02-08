import { Button, Form, Input } from "antd";
import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

export default function PaintforhireForm({ user, setUser }) {
  const [data1PaintSvcs, setData1PaintSvcs] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    localStorage.setItem("data1Key", JSON.stringify(data1PaintSvcs));
  }, [data1PaintSvcs]);

  const onFinish = (values) => {
    console.log("Success:", values);
    let data1svc = values;
    setData1PaintSvcs(data1svc);
    
    //*state of prelogin Form is passed properly, in cases needed
    console.log(data1PaintSvcs);
    
    
    localStorage.setItem("data1Key", JSON.stringify(data1PaintSvcs));
    console.log(localStorage);
    //* below: store, transport, parse, access your Local Storage data like this
    // const localStorageData = localStorage.getItem('data1Key');
    // const parsedData = JSON.parse(localStorageData);
    // const sizeofModelValue = parsedData?.sizeofModel;
    // console.log(sizeofModelValue);

    console.log(user);

    //? if i remove code below, i can see my LocalStorage data. if i comment-in, localStorage data disappears for some reason
    //? if user is null, navigate or link to Login
  
    // if (user === null) {
    //   navigate('/login');
    //   console.log(localStorage);

    //? try to code here
  }



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
          {/* <Link to="/login">
              <Button
                style={{ backgroundColor: "#01628f" }}
                type="primary"
                htmlType="submit"
              >
                Add to cart
              </Button>
          </Link> */}
          
              <Button
                style={{ backgroundColor: "#01628f" }}
                type="primary"
                htmlType="submit"
              >
                Add to cart
              </Button>
          
        </Form.Item>
      </Form>


    </>
  );
}
