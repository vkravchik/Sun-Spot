import React, { Fragment } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import User from "./containers/User";
import Chart from "./containers/Chart";

function App() {
  return (
    <Fragment>
      <Router>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/chart'>
              HighStock Chart
            </Link>
          </li>
        </ul>
        <Route exact path='/'>
          <User/>
        </Route>

        <Route exact path='/chart'>
          <Chart/>
        </Route>
      </Router>
    </Fragment>
  );
}

export default App;
