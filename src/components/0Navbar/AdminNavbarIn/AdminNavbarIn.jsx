import "../Navbar.css";
import { SettingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Layout, Button, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
const { Header } = Layout;
import * as usersService from "../../../utilities/0usersService";

export default function AdminNavbarIn({ user, setUser, orders, setOrders, address, setAddress }) {
  let page = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();

  const items = [
    {
      key: "userOrders",
      label: (
        <Link to="/user/admin_userorders" className="link">
          Orders
        </Link>
      ),
    },
    {
      key: "userCredentials",
      label: (
        <Link to="/user/admin_usercredentials" className="link">
          Credentials
        </Link>
      ),
    },
    {
      key: "userAddresses",
      label: (
        <Link to="/user/admin_useraddresses" className="link">
          Addresses
        </Link>
      ),
    },
    {
      key: "FAQs",
      label: (
        <Link to="/user/admin_faqs" className="link">
          FAQs
        </Link>
      ),
    }
  ];

  //* J 24/1 0330: temporary addition - logout button
  function handleLogOut(e) {
    e.preventDefault();
    // setLogs([]);
    // setGoals([]);
    usersService.logOut();
    setUser(null);
    setAddress(null);
    console.log('User state on Logout is: ', user);          
    console.log('Address state on Logout is: ', address);     //! slow by 1 step
    navigate("/login")
  }

  return (
    <Header theme="light" className="navbar">
      <Link to="" className="brand">
        <img src="/0NavBarApplogo/leonAIbrushedited.png" alt="Logo" style={{ width: 50, height: 50 }} />

          <span className="app-name">Condotierre</span>

      </Link>

      <Menu
        className="menu"
        selectedKeys={page}
        theme="light"
        mode="horizontal"
        items={items}
        style={{ margin: '0 0 0 4%'}}
      />

      {/* J 24/1 0330: temporary addition - logout button
      <div className="logout-buttons"></div> */}

      <div className="auth-buttons">
        <h3>
          Welcome back,{" "}
          {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
        </h3>

        <Link to="/user/admin">
          <Button icon={<SettingOutlined />}></Button>
        </Link>

        <Link to="/login" onClick={handleLogOut}>
          <Button>Log Out</Button>
        </Link>

      </div>
    </Header>
  );
}
