import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactHighCharts from 'react-highcharts/ReactHighstock';

import { getHighStockAction } from '../redux/actions/highStockActions';
import SwitchType from './SwitchType';

const HighStockChart = (props) => {
  const { getHighStockAction } = props;
  const { highStockType, highStockProps: { isLoading, data } } = props;

  const title = 'Switch Chart Type';

  useEffect(() => {
    getHighStockAction();
  }, [getHighStockAction]);

  const config = {
    chart: {
      events: {
        load: function () {
          this.showLoading();
          if (!isLoading) {
            this.hideLoading();
          }
        }
      }
    },
    rangeSelector: {
      selected: 1,
      inputEnabled: false
    },
    title: {
      text: 'Sunspot Frequency Chart'
    },
    series: [{
      type: highStockType,
      name: 'Sunspot amount',
      fillOpacity: 0.1,
      data: data,
      tooltip: {
        valueDecimals: 2
      },
    }]
  };

  return (
    <>
      <ReactHighCharts config={config}/>
      <SwitchType title={title}/>
    </>
  )
};

const mapStateToProps = (state) => ({
  highStockProps: state.highStockReducer,
  highStockType: state.switchTypeReducer.highStockType,
});

export default connect(mapStateToProps, {
  getHighStockAction
})(HighStockChart)
