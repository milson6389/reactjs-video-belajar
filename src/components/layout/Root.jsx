import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Root = () => {
  return (
    <Fragment>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Root;
