import { FunctionComponent, ReactNode } from "react";
import Header from "../components/Header";
import { Layout } from "antd";
import Navbar from "../components/Navbar";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ height: "4000px", background: "#ffffff" }}>
      <Header></Header>
      <Navbar></Navbar>
      <div>{children}</div>
    </Layout>
  );
};

export default DefaultLayout;
