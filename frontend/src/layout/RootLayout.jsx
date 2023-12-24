import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/MainNavigation/Navbar";

const RootLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
