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
        }}
      >
        © {new Date().getFullYear()} By <a href="https://github.com/justintea/Condottiere" target="_blank" rel="noopener noreferrer">Justin Teh</a>
      </Footer>
  </React.StrictMode>
);
