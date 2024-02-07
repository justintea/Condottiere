import "../Navbar.css";

import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

export default function NavbarOut() {
  return (
    <Header className="navbar">
      
      <Link to="/">
        <div className="brand">
          <img src="/Logo.svg" alt="Logo" style={{ width: 40, height: 40 }} />
          <span className="app-name">BudgetBuddy</span>
        </div>
      </Link>

      <div className="auth-buttons">
        <Link to="/login">
          <Button type="primary">Log In</Button>
        </Link>
        <Link to="/signup">
          <Button type="default">Sign Up</Button>
        </Link>
      </div>
    </Header>
  );
}
