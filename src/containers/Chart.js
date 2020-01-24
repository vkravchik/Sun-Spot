import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import '../common/styles/Chart.scss';

import { getHighStockConfigAction } from '../redux/actions/chartActions';

import HighStockChart from "../components/HighStockChart";
import RangeSlider from '../components/RangeSlider';

const Chart = (props) => {

  const {getHighStockConfigAction} = props;
  const {data, error, initialConfig} = props.chartProps;

  useEffect(() => {
    getHighStockConfigAction();
  }, [getHighStockConfigAction]);

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
    getHighStockConfigAction: () => dispatch(getHighStockConfigAction()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
