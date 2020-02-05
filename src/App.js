import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavMenu from './components/NavMenu';
import Error from './components/Error';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.scss';
import PieChartContainer from './containers/PieChartContainer';
import ScatterPlotContainer from './containers/ScatterPlotContainer';

const App = (props) => {
  const { errorHandlerProps: { error } } = props;

  return (
    <>
      <Router>
        <NavMenu />

        <Route exact path="/">
          In progress
        </Route>

        <Route exact path="/pie">
          <PieChartContainer />
        </Route>

        <Route exact path="/depth">
          <ScatterPlotContainer />
        </Route>
      </Router>

      <div className="error-container">
        {
          error.length !== 0 && error.map(
            (el, k) => <Error key={k} error={el} />
          )
        }
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  errorHandlerProps: state.errorHandlerReducer
});

export default connect(mapStateToProps)(App);
