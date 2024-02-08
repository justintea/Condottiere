import "../Navbar.css";

import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

export default function NavbarOut() {


  return (
    <Header className="navbar" style={{ backgroundColor: "white" }}>
      
      <Link to="/">
        <div className="brand">
          <img src="../../../screenshots/leonAIbrushedited.png" alt="Logo" style={{ width: 50, height: 50 }} />
          <span className="app-name" >Condotierre</span>
        </div>
      </Link>

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
