import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./components/GlobalStyle";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ff630e",
            fontFamily: "Roboto, sans-serif",
            colorBgBase: "#ffffff",
            colorLinkHover: "#ff630e",
            colorLink: "#130f40",
            colorLinkActive: "#ff630e",
          },
          components: {
            Typography: {},
            Dropdown: {
              colorBgTextHover: "#ff630e",
              motionDurationMid: "0s",
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </GlobalStyle>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
