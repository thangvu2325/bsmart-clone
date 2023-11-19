import { FunctionComponent, ReactNode } from "react";
import Header from "../components/Header";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout
      style={{
        background: "#ffffff",
        width: "100%",
        contain: "paint",
      }}
    >
      <Header></Header>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div>{children}</div>
      <Footer></Footer>
    </Layout>
  );
};

export default DefaultLayout;
