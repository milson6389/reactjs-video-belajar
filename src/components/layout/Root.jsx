import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

const Root = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="px-10 my-5">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Root;
