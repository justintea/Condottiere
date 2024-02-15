import { Outlet, useOutletContext, useNavigate } from "react-router-dom";
import { List } from 'antd';
import { EyeOutlined, DiffOutlined, DeleteOutlined } from "@ant-design/icons";


export default function AdminUserOrdersPage({ user }) {
  
  const { orders, setOrders } = useOutletContext();
  const Navigate = useNavigate();

  const userOrdersFunctionsList = [
    {
      title: "View all user orders",
      description: "Purpose: Data analytics and CRM",
      icon: <EyeOutlined className="UserInfoIcons" style={{ fontSize: "230%" }} />,
      route: "/user/admin_userorders_viewall", 
    },
    {
      title: "Update details of an order",
      description: "Purpose: Order management and incident handling",
      icon: <DiffOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      route: "/user/admin_userorders_updateone", 
    },
    {
      title: "Delete an order",
      description:
        "Purpose: Purge database or past data",
      icon: <DeleteOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      route: "/user/admin_userorders_deleteone", 
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
  
      <h2 style={{ fontFamily: "Palatino Linotype" , margin: '1% 0 0.5% 5%' }}> User orders</h2>

      <List 
        itemLayout="horizontal"
        dataSource={userOrdersFunctionsList}
        renderItem={(item) => (
          <List.Item className='userOrdersFunctionsList' onClick={() => handleClick(item.route)} >

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