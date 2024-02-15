import { Outlet, useOutletContext, useNavigate } from "react-router-dom";
import { List } from 'antd';
import { ShoppingOutlined, ShoppingCartOutlined, CalendarOutlined , HomeOutlined, LockOutlined  } from "@ant-design/icons";

export default function AdminDashboardPage({ user }) {
  useOutletContext();

  const Navigate = useNavigate();

  const dashboardList = [
    {
      title: "Visit our store",
      description: "Continue shopping",
      icon: <ShoppingOutlined className="UserInfoIcons" style={{ fontSize: "230%" }} />,
      route: "/user/", 
    },
    {
      title: "Past purchases",
      description: "A history of your past transactions with us",
      icon: <CalendarOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      route: "/user/orders", 
    },
    {
      title: "Address & contact details",
      description:
        "For our delivery purposes",
      icon: <HomeOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      route: "/user/address", 
    },
    {
      title: "Password",
      description:
        "Change your password",
      icon: <LockOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      // content: xxx, //to do AJAX GET from a db
      route: "", 

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
      <p> "You have the conn" </p>

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


    </>);

}
