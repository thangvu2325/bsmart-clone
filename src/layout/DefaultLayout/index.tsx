import { FunctionComponent, ReactNode } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Layout, Space } from "antd";
interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout style={{ backgroundColor: "#fff" }}>
        <Header></Header>
        <Navbar></Navbar>
        {children}
        <Sidebar></Sidebar>
        <Footer></Footer>
      </Layout>
    </Space>
  );
};

export default DefaultLayout;
