import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import '../styles/Chart.scss';

import { getInitialChartConfigAction } from '../redux/actions/chartActions';

import HighStockChart from "../components/HighStockChart";
import SwitchType from "../components/SwitchType";
import RangeSlider from '../components/RangeSlider';

const Chart = (props) => {

  const {getInitialChartConfigAction} = props;
  const {data, error, initialConfig} = props.chartProps;

  useEffect(() => {
    getInitialChartConfigAction();
  }, [getInitialChartConfigAction]);

  const renderChart = () => (
    <div className='container shadow-sm p-3 mb-5 bg-white rounded chart-container'>
      <RangeSlider initialConfig={initialConfig}/>
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
    chartProps: state.chartReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialChartConfigAction: () => dispatch(getInitialChartConfigAction()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
