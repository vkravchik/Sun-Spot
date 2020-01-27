import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import Chart from './containers/Chart';
import Pie from './containers/Pie';
import { NavMenu } from './components/NavMenu';

import './App.scss';

function App() {
  return (
    <Fragment>
      <Router>
        <NavMenu />

        <Route exact path='/'>
          <Chart />
        </Route>

        <Route exact path='/pie'>
          <Pie />
        </Route>

        <Route exact path='/depth'>
          Third
        </Route>
      </Router>
    </Fragment>
  );
}

export default App;
