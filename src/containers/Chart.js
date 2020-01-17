import React, { useEffect } from "react";
import ReactHighStock from "react-highcharts/ReactHighstock";
import { connect } from "react-redux";
import { getHighStockAction } from "../redux/actions/chartActions";

const Chart = (props) => {
  const {getHighStockAction} = props;
  const {isLoading, data, error} = props.chartProps;

  let config = {};

  useEffect(() => {
    getHighStockAction();
  }, [getHighStockAction]);

  const renderChart = () => {
    config = {
      rangeSelector: {
        selected: 1
      },
      title: {
        text: 'AAPL Stock Price'
      },
      series: [{
        name: 'AAPL',
        data: data,
        tooltip: {
          valueDecimals: 2
        }
      }]
    };

    return (
      <ReactHighStock config={config}/>
    )
  };

  return (
    <div>
      {
        isLoading &&
        <div>
          Loading...
        </div>
      }
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHighStockAction: () => dispatch(getHighStockAction()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
