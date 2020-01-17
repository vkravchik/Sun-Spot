import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const NavMenu = () => {

  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/second">Second</Link>
        </li>
        <li>
          <Link to="/third">Third</Link>
        </li>
      </ul>
    </Fragment>
  )
};
