import React, { FunctionComponent, ReactNode } from "react";
import "./GlobalStyles.scss";

interface GlobalStyleProps {
  children: ReactNode;
}

const GlobalStyle: FunctionComponent<GlobalStyleProps> = ({ children }) => {
  return <>{children}</>;
};

export default GlobalStyle;
