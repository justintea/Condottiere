import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "antd/es/layout/layout.js";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider theme={{
  components: {
    Button: {
      colorPrimaryBorderHover: 'red',
      colorPrimaryHover: '#478e80',
      colorPrimary: 'red',
      colorPrimaryActive: '#478e80',
      colorPrimaryTextHover: '#478e80',
        },
    Input: {
      colorPrimaryHover: '#03594c',
      activeBg:'#d2e0dd',
      colorPrimary: '#03594c',
      activeShadow: '#478e80',
        },
    Menu: {
      horizontalItemHoverColor: '#478e80',
      horizontalItemSelectedColor: '#478e80',
        },
    Descriptions: {
      labelBg: '#9dc4bc',     // header row color
      contentColor: 'black',  //text
      colorSplit: '#bebebe',  //table border lines
      extraColor: '#9dc4bc',  // ?

    }
    
  }
}}>
        <App />
        </ConfigProvider>

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
