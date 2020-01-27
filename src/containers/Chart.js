import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import '../common/styles/Chart.scss';

import { getHighStockAction } from '../redux/actions/highStockActions';
import { getSliderConfigAction, setSliderConfigAction } from "../redux/actions/sliderActions";

import HighStockChart from "../components/HighStockChart";
import RangeSlider from '../components/RangeSlider';

const Chart = (props) => {

  const {getSliderConfigAction, getHighStockAction, setSliderConfigActions} = props;
  const {data, error} = props.highStockProps;
  const {initialConfig} = props.sliderProps;

  useEffect(() => {
    getSliderConfigAction();
  }, [getSliderConfigAction]);

  const onAfterChange = (value = []) => {
    const dateObj = {};

    dateObj['start_date'] = value[0];
    dateObj['finish_date'] = value[1];

    setSliderConfigActions(dateObj);
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
    highStockProps: state.highStockReducer,
    sliderProps: state.sliderReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSliderConfigAction: () => dispatch(getSliderConfigAction()),
    setSliderConfigActions: (dateObj) => dispatch(setSliderConfigAction(dateObj)),
    getHighStockAction: (dateObj) => dispatch(getHighStockAction(dateObj)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
