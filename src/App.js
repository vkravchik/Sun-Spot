import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import Chart from './containers/Chart';
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

        <Route exact path='/second'>
          Second
        </Route>

        <Route exact path='/third'>
          Third
        </Route>
      </Router>
    </Fragment>
  );
}

export default App;
