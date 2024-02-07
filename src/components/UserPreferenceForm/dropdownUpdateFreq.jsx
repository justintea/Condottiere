import { React , useState } from 'react';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import {  Dropdown, message, Space } from 'antd';


const items = [
  {
    label: 'Quarterly',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: 'Monthly',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: 'Half-monthly',
    key: '3',
    icon: <UserOutlined />,
  },
  {
    label: 'Annually',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    // disabled: true,
  },
];


export default function DropdownUpdateFreq( { updatefreq , setUpdatefreq }) {

  const [frequency, setFrequency] = useState(updatefreq);

  
  const handleButtonClick = () => {
    //? push data to db 
    //? for now just change state
    setUpdatefreq(frequency);
    console.log(updatefreq);
  };
  
  const handleMenuClick = (item) => {
    // setFrequency(item.label);
    // console.log(item);

    setFrequency(item.label);
    // console.log(item.label);
    // console.log(frequency);
  };

  
  const menuProps = {
    items,
    onClick: handleMenuClick,
    };
  
  return (
    <>
      <Space wrap>
        <Dropdown.Button
          menu={menuProps}
          placement="bottom"
          icon={<CalendarOutlined />}
          onClick={handleButtonClick}
        >
          { frequency }
          {/* {updatefreq}
           */}
          
          
        </Dropdown.Button>
      </Space>
    </>
  );
}