import "../Navbar.css";
import { SettingOutlined } from "@ant-design/icons";
import { PoweroffOutlined } from "@ant-design/icons";
import { Layout, Button, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
const { Header } = Layout;
import * as usersService from "../../../utilities/usersService";

export default function NavbarIn({ user, setUser, logs, setLogs,goals, setGoals }) {
  let page = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();

  const items = [
    {
      key: "dashboard",
      label: (
        <Link to="/user/dashboard" className="link">
          Dashboard
        </Link>
      ),
    },
    {
      key: "tracking",
      label: (
        <Link to="/user/tracking" className="link">
          Tracking
        </Link>
      ),
    },
    {
      key: "goals",
      label: (
        <Link to="/user/goals" className="link">
          Goals
        </Link>
      ),
    },
    {
      key: "edit",
      label: (
        <Link to="/user/edit" className="link">
          Edit
        </Link>
      ),
    },
  ];

  //* J 24/1 0330: temporary addition - logout button
  function handleLogOut(e) {
    e.preventDefault();
    setLogs([]);
    setGoals([]);
    usersService.logOut();
    setUser(null);
    navigate("/login")
  }

  return (
    <Header theme="light" className="navbar">
      <Link to="/user/dashboard" className="brand">
        <img src="/Logo.svg" alt="Logo" style={{ width: 40, height: 40 }} />
        <span className="app-name">BudgetBuddy</span>
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
        <Link to="/login" onClick={handleLogOut}>
          <Button
            icon={<PoweroffOutlined />}
            style={{ marginRight: "5px" }}
          ></Button>
        </Link>
        <Link to="/user/preferences">
          {/*  */}
          <Button icon={<SettingOutlined />}></Button>
        </Link>
      </div>
    </Header>
  );
}
