import "../Navbar.css";

import { Layout, Button, Menu } from "antd";
import { Link , useLocation } from "react-router-dom";
const { Header } = Layout;

export default function NavbarOut() {
  let page = useLocation().pathname.split("/")[2];

  const items = [
    {
      key: "paintservices",
      label: (
        <Link to="/paintservices" className="link">
          Paint-for-Hire
        </Link>
      ),
    },
    {
      key: "paintclasses",
      label: (
        <Link to="/paintclasses" className="link">
          Masterclasses
        </Link>
      ),
    },
    {
      key: "painttables",
      label: (
        <Link to="/painttables" className="link">
          Paint tables
        </Link>
      ),
    },
    {
      key: "FAQ",
      label: (
        <Link to="FAQs" className="link">
          FAQs
        </Link>
      ),
    }

  ];

  return (
    <Header className="navbar" style={{ backgroundColor: "white" }}>
      
      <Link to="/">
        <div className="brand">
          {/* <img src="../../../public/0NavBarApplogo/leonAIbrushedited.png" alt="Logo" style={{ width: 50, height: 50 }} /> */}
          <img src="/0NavBarApplogo/leonAIbrushedited.png" alt="Logo" style={{ width: 50, height: 50 }} />

          <span className="app-name" >Condotierre</span>
        </div>
      </Link>

      <Menu
        className="menu"
        selectedKeys={page}
        theme="light"
        mode="horizontal"
        items={items}
      />

      <div className="auth-buttons">
        <Link to="/login">
          <Button style={{ backgroundColor: "#01628f" }} type="primary">Log In</Button>
        </Link>
        <Link to="/signup">
          <Button type="default" >Sign Up</Button>
        </Link>
      </div>
    </Header>
  );
}
