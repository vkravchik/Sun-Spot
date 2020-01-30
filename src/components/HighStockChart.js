import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactHighCharts from 'react-highcharts/ReactHighstock';

import { getHighStockData } from '../redux/actions/highStockActions';
import SwitchType from './SwitchType';

const HighStockChart = (props) => {
  const { getHighStockData } = props;
  const { highStockType, highStockProps: { isLoading, data } } = props;

  const title = 'Switch Chart Type';

  useEffect(() => {
    getHighStockData();
  }, [getHighStockData]);

  const config = {
    chart: {
      events: {
        load() {
          // eslint-disable-next-line react/no-this-in-sfc
          this.showLoading();

          if (!isLoading) {
            // eslint-disable-next-line react/no-this-in-sfc
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
      data,
      tooltip: {
        valueDecimals: 2
      }
    }]
  };

  return (
    <>
      <ReactHighCharts config={config}/>
      <SwitchType title={title}/>
    </>
  );
};

const mapStateToProps = (state) => ({
  highStockProps: state.highStockReducer,
  highStockType: state.switchTypeReducer.highStockType
});

export default connect(mapStateToProps, {
  getHighStockData
})(HighStockChart);
