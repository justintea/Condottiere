import { Outlet, useOutletContext, useNavigate } from "react-router-dom";
import { List } from 'antd';
import { EyeOutlined, DiffOutlined, DeleteOutlined } from "@ant-design/icons";


export default function AdminUserAddressesPage({ user }) {
  
  const { address, setAddress } = useOutletContext();
  const Navigate = useNavigate();

  const userAddressesFunctionsList = [
    {
      title: "View all user addresses",
      description: "Purpose: Data analytics and CRM",
      icon: <EyeOutlined className="UserInfoIcons" style={{ fontSize: "230%" }} />,
      route: "/user/admin_useraddresses_viewall", 
    },
    {
      title: "Update user address & contact details",
      description: "Purpose: Order management and incident handling",
      icon: <DiffOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      route: "/user/admin_useraddresses_updateone", 
    },
    {
      title: "Delete a user address",
      description:
        "Purpose: Purge database or past data",
      icon: <DeleteOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      route: "/user/admin_useraddresses_deleteone", 
    },
    
    // {
    //   title: '',
    //   description: '',
    //   modalContent: null,
    //   content: '',
    // },
  ];


  const handleClick = (route) => {
    Navigate(route);
}
      //? tester code - to render prelogin form data, from LocalStorage
      // const localStorageData = localStorage.getItem('data1Key');
      // const parsedData = JSON.parse(localStorageData);
  return (
    <>
  
      <h2 style={{ fontFamily: "Palatino Linotype" , margin: '1% 0 0.5% 5%' }}> User addresses</h2>

      <List 
        itemLayout="horizontal"
        dataSource={userAddressesFunctionsList}
        renderItem={(item) => (
          <List.Item className='userAddressesFunctionsList' onClick={() => handleClick(item.route)} >

            <List.Item.Meta
              style={{ margin: '0.5% 0 0 5%'}}
              avatar={item.icon}
              title={item.title}
              description={item.description}
              route={item.route}
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