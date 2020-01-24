import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import '../common/styles/Chart.scss';

import { getHighStockAction, getHighStockConfigAction } from '../redux/actions/highStockActions';

import HighStockChart from "../components/HighStockChart";
import RangeSlider from '../components/RangeSlider';

const Chart = (props) => {

  const {getHighStockConfigAction, getHighStockAction} = props;
  const {data, error, initialConfig} = props.highStockReducer;

  useEffect(() => {
    getHighStockConfigAction();
  }, [getHighStockConfigAction]);

  const onAfterChange = (value = []) => {
    const dateObj = {};
    dateObj['start_date'] = value[0];
    dateObj['finish_date'] = value[1];
    getHighStockAction(dateObj);
  };

  const renderChart = () => (
    <div className='container shadow-sm p-3 mb-5 bg-white rounded chart-container'>
      <RangeSlider initialConfig={initialConfig} onAfterChange={onAfterChange} />
      <HighStockChart/>
    </div>
  );

  return (
    <div>
      {
        data && !error &&
        renderChart()
      }
      {
        error &&
        error.toString()
      }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    highStockReducer: state.highStockReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHighStockConfigAction: () => dispatch(getHighStockConfigAction()),
    getHighStockAction: (dateObj) => dispatch(getHighStockAction(dateObj)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
