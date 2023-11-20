import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./components/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
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
              Breadcrumb: {
                linkColor: "#fff",
                itemColor: "#fff",
                colorIcon: "#fff",
                linkHoverColor: "#ff630e",
              },
              Pagination: {
                itemBg: "#f5f5f5",
              },
            },
          }}
        >
          <App />
        </ConfigProvider>
      </GlobalStyle>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
