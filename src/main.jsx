import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "antd/es/layout/layout.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Footer
        style={{
        textAlign: "center",
        // backgroundColor: "white"
        backgroundColor: "#03594c",
        color: "white"
      }}
      
      >
        © {new Date().getFullYear()} by <a href="https://github.com/justintea/Condottiere" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Justin Teh</a>
      </Footer>
  </React.StrictMode>
);
