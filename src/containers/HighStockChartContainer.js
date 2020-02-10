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
    sliderProps: { initialConfig }
  } = props;

  useEffect(() => {
    getSliderConfigData();
  }, [getSliderConfigData]);

  const onAfterChange = (value = []) => {
    const dateMap = {};

    [dateMap.startDate, dateMap.finishDate] = value;

    setSliderConfigData(dateMap);
    getHighStockData(dateMap);
  };

  const renderChart = () => (
    <div className="container shadow-sm p-3 mb-5 bg-transparent rounded chart-container">
      <RangeSlider initialConfig={initialConfig} onAfterChange={onAfterChange} />
      <HighStockChart/>
    </div>
  );

  return (
    renderChart()
  );
};

const mapStateToProps = (state) => ({
  sliderProps: state.sliderReducer
});

export default connect(mapStateToProps, {
  getSliderConfigData,
  setSliderConfigData,
  getHighStockData
})(HighStockChartContainer);
