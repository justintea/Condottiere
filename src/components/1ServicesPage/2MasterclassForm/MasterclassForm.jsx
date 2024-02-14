import { Button, Form, Input, Select, Space } from "antd";
const { Option } = Select;
import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

export default function MasterclassForm({ user, setUser }) {
  const Navigate = useNavigate();

  const [form] = Form.useForm();

  const onClasstypeChange = (value) => {
    switch (value) {
      case 'Hired Tutor':
        form.setFieldsValue({
          note: 'Hired Tutor!',
        });
        break;
      case 'Squire-r-us':
        form.setFieldsValue({
          note: 'Squire-r-us!',
        });
        break;
      case 'Paint-Knight':
        form.setFieldsValue({
          note: 'Paint-Knight!',
        });
        break;
        case 'Paint-Champion':
          form.setFieldsValue({
            note: 'Paint-Champion',
          });      
        break;
      default:
    }
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    
    //*state of prelogin Form is passed in 'values'
    //* write in manner that groups them in Array of arrays, by the 3 services 
    const masterclassValuesArray =
    {
      'Painting Services': { null: null },
      'Masterclass Booking': { ...values },
      'Paint Table Booking': { null: null }
    };
  
    console.log('this is values: ', values);
    console.log('this is valuesArray: ', masterclassValuesArray);
    console.log(user);

    //! Use purely LocalStorage method. worked in PaintforHireForm...
    if (user === null) {
      localStorage.setItem("data1Key", JSON.stringify(masterclassValuesArray));
      console.log(localStorage);
      Navigate('/login');      //* head to loginPage to login
  
      //* postlogin 
      } else {
      localStorage.setItem("data1Key", JSON.stringify(masterclassValuesArray));
      console.log(localStorage);
      Navigate('/user/cart');
      }
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
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 350,
      }}
    >
    
      <Form.Item
        name="classType"
        label="Class Type"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option"
          onChange={onClasstypeChange}
          allowClear
        >
          <Option value="Masterclass package 1: Hired Tutor">Hired Tutor</Option>
          <Option value="Masterclass package 2: Squire-r-us">Squire-r-us</Option>
          <Option value="Masterclass package 3: Paint-Knight">Paint-Knight</Option>
          <Option value="Masterclass package 4: Paint-Champion">Paint-Champion</Option>
    
            </Select>
      </Form.Item>
      
      <Form.Item {...tailLayout}>
          <Space>
            
          <Button type="primary" style={{ backgroundColor: "#01628f",  margin: "0  0 0 125%" }} htmlType="submit">
            Add to Cart
          </Button>
          
        </Space>
      </Form.Item>
    </Form>

    </>
  );
}


{/* <Form
        name="basic"
        labelCol={{
          span: 11,
        }}
        wrapperCol={{
          span: 15,
        }}
        style={{
          maxWidth: 240,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Class type"
          name="Class type"
          rules={[
            {
              required: true,
              message:
                "Choose from 'Hired Tutor', 'Squire-r-us', 'Paint-knights-on-a-quest' and 'Paint-Champion'.",
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
          
              <Button
                style={{ backgroundColor: "#01628f" }}
                type="primary"
                htmlType="submit"
              >
                Add to cart
              </Button>
          
        </Form.Item>
      </Form> */}

