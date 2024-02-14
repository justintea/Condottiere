import { Button, Form, Input, Select, Space } from 'antd';
const { Option } = Select;
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

export default function UserEditAddressForm() {
  
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const onCountryChange = (value) => {
    switch (value) {
      case '':
        form.setFieldsValue();
        break;
      default:

    }
  };
  // const onCountryChange = (value) => {
  //   switch (value) {
  //     case 'male':
  //       form.setFieldsValue({
  //         note: 'Hi, man!',
  //       });
  //       break;
  //     case 'female':
  //       form.setFieldsValue({
  //         note: 'Hi, lady!',
  //       });
  //       break;
  //     case 'other':
  //       form.setFieldsValue({
  //         note: 'Hi there!',
  //       });
  //       break;
  //     default:
  //   }
  // };


  return (<>
  
  <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="fullName"
        label="Full name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="country"
        label="Country"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option"
          onChange={onCountryChange}
          allowClear
          style={{ width: "100%", margin: '0 0 1% 0%' }}

        >
          //? use a countries library next time
          //? npm install 'countries-list' 
          <Option value="Argentina">Argentina</Option>
          <Option value="Australia">Australia</Option>
          <Option value="Brazil">Brazil</Option>
          <Option value="Canada">Canada</Option>
          <Option value="China">China</Option>
          <Option value="France">France</Option>
          <Option value="Germany">Germany</Option>
          <Option value="India">India</Option>
          <Option value="Indonesia">Indonesia</Option>
          <Option value="Italy">Italy</Option>
          <Option value="Japan">Japan</Option>
          <Option value="Mexico">Mexico</Option>
          <Option value="South Korea">South Korea</Option>
          <Option value="Russia">Russia</Option>
          <Option value="Saudi Arabia">Saudi Arabia</Option>
          <Option value="Singapore">Singapore</Option>
          <Option value="South Africa">South Africa</Option>
          <Option value="Turkey">Turkey</Option>
          <Option value="United States">United States</Option>
          <Option value="United Kingdom">United States</Option>
          {/* <Option value=""></Option> */}
          
        </Select>
      </Form.Item>

      <Form.Item
        name="postalCode"
        label="Postal code"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="addressStreet"
        label="Street number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="addressAptUnitNum"
        label="Apartment number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      
      <Form.Item {...tailLayout}>
          <Button type="primary" style={{ backgroundColor: "#01628f", margin: '0 0 0 80%' }} htmlType="submit"> Update </Button>
      </Form.Item>
    </Form>
  
  </>);
}