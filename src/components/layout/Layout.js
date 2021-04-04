import React from "react";
import GlobalStyle from "../../globalStyle/GlobalStyle";
import CssBaseline from "@material-ui/core/CssBaseline";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <CssBaseline />
      <main>{children}</main>
    </>
  );
};

export default Layout;
