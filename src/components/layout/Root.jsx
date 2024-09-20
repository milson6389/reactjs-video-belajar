import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Root = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="my-5">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Root;
