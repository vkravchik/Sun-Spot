import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export const NavMenu = () => {

  return (
    <Fragment>
      {/*<ul>*/}
      {/*  <li>*/}
      {/*    <Link to="/">Home</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link to="/second">Second</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link to="/third">Third</Link>*/}
      {/*  </li>*/}
      {/*</ul>*/}

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/sunspot.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </Fragment>
  )
};
