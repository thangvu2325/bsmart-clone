import { FunctionComponent, ReactNode } from "react";
import Header from "../components/Header";
import { Layout } from "antd";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header></Header>
      <div>{children}</div>
    </Layout>
  );
};

export default DefaultLayout;
