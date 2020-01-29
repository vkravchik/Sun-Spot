import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import '../common/styles/Chart.scss';

import { getHighStockData } from '../redux/actions/highStockActions';
import { getSliderConfigData, setSliderConfigData } from '../redux/actions/sliderActions';

import HighStockChart from '../components/HighStockChart';
import RangeSlider from '../components/RangeSlider';

const HighStockChartContainer = (props) => {
  const {
    getSliderConfigData,
    getHighStockData,
    setSliderConfigData,
    sliderProps: { initialConfig },
    highStockProps: { data, error }
  } = props;

  useEffect(() => {
    getSliderConfigData();
  }, [getSliderConfigData]);

  const onAfterChange = (value = []) => {
    const dateMap = {};

    dateMap['start_date'] = value[0];
    dateMap['finish_date'] = value[1];

    setSliderConfigData(dateMap);
    getHighStockData(dateMap);
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

const mapStateToProps = (state) => ({
  highStockProps: state.highStockReducer,
  sliderProps: state.sliderReducer
});

export default connect(mapStateToProps, {
  getSliderConfigData,
  setSliderConfigData,
  getHighStockData
})(HighStockChartContainer)
