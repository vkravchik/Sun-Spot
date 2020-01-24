import React, { useEffect } from "react";
import { connect } from "react-redux";
import ReactHighCharts from "react-highcharts/ReactHighstock";

import { getHighStockAction } from "../redux/actions/chartActions";
import SwitchType from "./SwitchType";

const HighStockChart = (props) => {
  const { getHighStockAction } = props;
  const { isLoading, data, type } = props.chartProps;

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
      type: type,
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
  chartProps: state.chartReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getHighStockAction: () => dispatch(getHighStockAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HighStockChart)
