import { FunctionComponent, ReactNode, Suspense, lazy } from "react";
import { Layout, Space } from "antd";
import Loading from "../../components/Loading/Loading";
const Header = lazy(() => import("../components/Header"));
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const Sidebar = lazy(() => import("../components/Sidebar"));
interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout style={{ backgroundColor: "#fff" }}>
          <Header></Header>
          <Navbar></Navbar>
          {children}
          <Sidebar></Sidebar>
          <Footer></Footer>
        </Layout>
      </Space>
    </Suspense>
  );
};

export default DefaultLayout;
