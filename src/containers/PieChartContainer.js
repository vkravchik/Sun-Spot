import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PieChart from '../components/PieChart';
import RangeSlider from '../components/RangeSlider';

import { getSliderConfigData, setSliderConfigData } from '../redux/actions/sliderActions';
import { getPieData } from '../redux/actions/pieActions';

const PieChartContainer = (props) => {
  const { getSliderConfigData, getPieData, setSliderConfigData, initialConfig } = props;

  useEffect(() => {
    getSliderConfigData();
  },[getSliderConfigData]);

  const onAfterChange = (value = []) => {
    const dateMap = {};

    dateMap['start_date'] = value[0];
    dateMap['finish_date'] = value[1];

    setSliderConfigData(dateMap);
    getPieData(dateMap);
  };

  return (
    <div className="container shadow-sm p-3 mb-5 bg-white rounded chart-container">
      <RangeSlider initialConfig={initialConfig} onAfterChange={onAfterChange} />
      <PieChart />
    </div>
  );
};

const mapStateToProps = (props) => ({
  initialConfig: props.sliderReducer.initialConfig
});

export default connect(mapStateToProps, {
  getSliderConfigData,
  getPieData,
  setSliderConfigData
})(PieChartContainer);
