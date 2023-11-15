import { FunctionComponent, ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default DefaultLayout;
