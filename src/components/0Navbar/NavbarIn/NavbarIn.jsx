import "../Navbar.css";
import { SettingOutlined } from "@ant-design/icons";
import { Layout, Button, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
const { Header } = Layout;
import * as usersService from "../../../utilities/usersService";

export default function NavbarIn({ user, setUser, logs, setLogs,goals, setGoals }) {
  let page = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();

  const items = [
    {
      key: "paintservices",
      label: (
        <Link to="/user/paintservices" className="link">
          Paint-for-Hire
        </Link>
      ),
    },
    {
      key: "paintclasses",
      label: (
        <Link to="/user/paintclasses" className="link">
          Masterclasses
        </Link>
      ),
    },
    {
      key: "painttables",
      label: (
        <Link to="/user/painttables" className="link">
          Paint tables
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
    navigate("/login")
  }

  return (
    <Header theme="light" className="navbar">
      <Link to="" className="brand">
        {/* <img src="../../../public/0NavBarApplogo/leonAIbrushedited.png" alt="Logo" style={{ width: 50, height: 50 }} /> */}
        <img src="/0NavBarApplogo/leonAIbrushedited.png" alt="Logo" style={{ width: 50, height: 50 }} />

          <span className="app-name">Condotierre</span>

      </Link>

      <Menu
        className="menu"
        selectedKeys={page}
        theme="light"
        mode="horizontal"
        items={items}
      />

      {/* J 24/1 0330: temporary addition - logout button */}
      <div className="logout-buttons"></div>

      <div className="auth-buttons">
        <h3>
          Welcome back,{" "}
          {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
        </h3>

        <Link to="/user/info">
          {/*  */}
          <Button icon={<SettingOutlined />}></Button>
        </Link>

        <Link to="/login" onClick={handleLogOut}>
          <Button>Log Out</Button>
        </Link>

      </div>
    </Header>
  );
}
