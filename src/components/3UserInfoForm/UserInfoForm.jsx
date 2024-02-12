import './UserInfoForm.css'
import { List } from 'antd';
import { ShoppingOutlined, ShoppingCartOutlined, CalendarOutlined , HomeOutlined, LockOutlined  } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
//? tentative render
// import CartconfirmationPage from '../../pages/3UserPage/CartconfirmationPage/CartconfirmationPage';


export default function UserInfoForm({ user }) {   

  const Navigate = useNavigate();

  const preferlist = [
    {
      title: "Visit our store",
      description: "Continue shopping",
      icon: <ShoppingOutlined className="UserInfoIcons" style={{ fontSize: "230%" }} />,
      // content: xxx, //to do AJAX GET from a db
      route: "/user/", 

    },
    {
      title: "Past purchases",
      description: "A history of your past transactions with us",
      icon: <CalendarOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      route: "/user/orders", 

      // content: xxx, //to do AJAX GET from a db
    },
    {
      title: "Address",
      description:
        "For our delivery purposes",
      icon: <HomeOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      // content: xxx, //to do AJAX GET from a db
      route: "/cart", 

    },
    {
      title: "Password",
      description:
        "Change your password",
      icon: <LockOutlined className="UserInfoIcons" style={{ fontSize: "200%" }} />,
      // content: xxx, //to do AJAX GET from a db
      route: "/cart", 

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

const localStorageData = localStorage.getItem('data1Key');
    const parsedData = JSON.parse(localStorageData);
  return (
    <>
 <div>
 parsedData = {JSON.stringify(parsedData, null, 2)}
      </div>
      
      <List 
        itemLayout="horizontal"
        dataSource={preferlist}
        renderItem={(item) => (
          <List.Item className='preferlistitem' onClick={() => handleClick(item.route)} >

            <List.Item.Meta
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