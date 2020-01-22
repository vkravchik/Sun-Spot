import React, { Fragment, Component } from 'react';
import { Navbar } from 'react-bootstrap';

export class NavMenu extends Component {

  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/sunspot.png"
              width="30"
              height="30"
              className="d-inline-block align-top" />{' '}
            SunSpot
          </Navbar.Brand>
        </Navbar>
      </Fragment>
    )
  }
}
