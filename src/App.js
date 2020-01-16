import React, { Fragment } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./containers/User";
import Chart from "./containers/Chart";

function App() {
  return (
    <Fragment>
      <Router>
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
