import React, { useEffect, useState } from 'react';
import './UserInfoForm.css'
import { List } from 'antd';
import { ShoppingCartOutlined, CalendarOutlined , HomeOutlined, LockOutlined  } from "@ant-design/icons";


export default function UserInfoForm() {   

  const preferlist = [
    {
      title: "Visit our store",
      description: "Continue shopping",
      icon: <ShoppingCartOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      
      // content: xxx, //to do AJAX GET from a db
    },
    {
      title: "Past purchases",
      description: "A history of your past transactions with us",
      icon: <CalendarOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      
      // content: xxx, //to do AJAX GET from a db
    },
    {
      title: "Address",
      description:
        "For our delivery purposes",
      icon: <HomeOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      // content: xxx, //to do AJAX GET from a db
    },
    {
      title: "Password",
      description:
        "Change your password",
      icon: <LockOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      // content: xxx, //to do AJAX GET from a db
    },
    // {
    //   title: '',
    //   description: '',
    //   modalContent: null,
    //   content: '',
    // },
  ];






  return (
    <>
      <List 
        itemLayout="horizontal"
        dataSource={preferlist}
        renderItem={(item) => (
          <List.Item className='preferlistitem' >

            <List.Item.Meta
              avatar={item.icon}
              title={item.title}
              description={item.description}
            />

            {/* // this part to render value */}
            <div>{item.content}</div>        
          </List.Item>
        )}
        
      />
      <br />

    </>
  );


}