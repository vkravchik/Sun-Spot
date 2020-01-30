import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { connect } from "react-redux";

import { NavMenu } from './components/NavMenu';
import Chart from './containers/HighStockChartContainer';
import Pie from './containers/PieChartContainer';
import Error from "./components/Error";

import './App.scss';

const App = (props) => {
  const {errorHandlerProps: {error}} = props;

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

      <div className="error-container">
        {
          error.length && error.map(
            el => <Error error={el} />
          )
        }
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  errorHandlerProps: state.errorHandlerReducer,
});

export default connect(mapStateToProps)(App);
