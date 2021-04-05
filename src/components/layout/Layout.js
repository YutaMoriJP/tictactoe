import React from "react";
import GlobalStyle from "../../globalStyle/GlobalStyle";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
};

export default Layout;
