import { Button, Form, Input, Select, Space } from 'antd';
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import { createAddress } from '../../../utilities/2addressesService';

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

export default function UserEditAddressForm({ user }) {
  
  const { address, setAddress } = useOutletContext(); 
  console.log(user);
  const [form] = Form.useForm();
  const Navigate = useNavigate();

  const onFinish = async (addressData) => {
    console.log('user is: ', user);
    
    try { 
      console.log('Address Submission Success: ', addressData);

      const newAddress = await createAddress(addressData, user); 
      setAddress(addressData);
      //? few options to try
      // setAddress(address);
      
      console.log('new Address response from API: ', newAddress);

      Navigate('/user/address');
    }
    catch (error) {
      window.alert('Something is wrong: ', error);
      console.log(error);
    }

  };

 
  const handleCancel = () => {
    Navigate('/user/address');

    }

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
          {/* //? use a countries library next time
          //? npm install 'countries-list'  */}
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
          <Option value="United Kingdom">United Kingdom</Option>
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
          <Space style={{ margin: '0 0 0 60.5%'}}>
              <Button type="primary" style={{ backgroundColor: "#01628f" }} htmlType="submit"> Update </Button>
              <Button htmlType="button" onClick={handleCancel}> Cancel </Button>
          </Space>
      </Form.Item>
      
    </Form>
  
  </>);
}