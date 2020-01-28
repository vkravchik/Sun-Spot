import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PieChart from '../components/PieChart';
import RangeSlider from '../components/RangeSlider';

import { getSliderConfigAction, setSliderConfigAction } from '../redux/actions/sliderActions';
import { getPieAction } from '../redux/actions/pieActions';

const PieChartContainer = (props) => {
  const { getSliderConfigAction, getPieAction, setSliderConfigAction, initialConfig } = props;

  useEffect(() => {
    getSliderConfigAction();
  },[getSliderConfigAction]);

  const onAfterChange = (value = []) => {
    const dateMap = {};

    dateMap['start_date'] = value[0];
    dateMap['finish_date'] = value[1];

    setSliderConfigAction(dateMap);
    getPieAction(dateMap);
  };

  return (
    <div className='container shadow-sm p-3 mb-5 bg-white rounded chart-container'>
      <RangeSlider initialConfig={initialConfig} onAfterChange={onAfterChange} />
      <PieChart />
    </div>
  );
};

const mapStateToProps = (props) => ({
  initialConfig: props.sliderReducer.initialConfig
});

export default connect(mapStateToProps, {
  getSliderConfigAction,
  getPieAction,
  setSliderConfigAction
})(PieChartContainer)
