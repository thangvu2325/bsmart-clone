import { FunctionComponent, ReactNode } from "react";
import Header from "../components/Header";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ background: "#ffffff", paddingBottom: "100px" }}>
      <Header></Header>
      <Navbar></Navbar>
      <div>{children}</div>
      <Footer></Footer>
    </Layout>
  );
};

export default DefaultLayout;
