import { Outlet, useOutletContext, useNavigate } from "react-router-dom";
import { List } from 'antd';
import { TeamOutlined, ShoppingOutlined, HomeOutlined } from "@ant-design/icons";


export default function AdminDashboardPage({ user }) {

  const Navigate = useNavigate();

  const dashboardList = [
    {
      title: "User orders",
      description: "Manage user orders: View all, Update, Delete",
      icon: <ShoppingOutlined className="UserInfoIcons" style={{ fontSize: "230%" }} />,
      route: "/user/admin_userorders", 
    },
    {
      title: "User credentials",
      description: "Manage user login credentials: View all, Update, Delete",
      icon: <TeamOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      route: "/user/admin_usercredentials", 
    },
    {
      title: "Address & contact details",
      description:
        "Manage user addresses & contact information: View all, Update, Delete",
      icon: <HomeOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      route: "/user/admin_useraddresses", 
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

  return (
    <>
      <h2 style={{ fontFamily: "Palatino Linotype" , margin: '1% 0 0 5%' }}> Admin Dashboard </h2>
      <p style={{  margin: '0 0 0 11.7%', fontSize: '70%', fontStyle: 'italic' }}> "You have the conn" </p>
      <br />

      <List 
        itemLayout="horizontal"
        dataSource={dashboardList}
        renderItem={(item) => (
          <List.Item className='dashboardList' onClick={() => handleClick(item.route)} >

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
      <br />


    </>);

}
