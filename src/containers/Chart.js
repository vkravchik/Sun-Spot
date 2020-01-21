import React, { useEffect } from "react";
import ReactHighCharts from "react-highcharts/ReactHighstock";
import { connect } from "react-redux";
import { getHighStockAction } from "../redux/actions/chartActions";
import RangeSlider from "../components/RangeSlider";

const marks = {
  1818: {
    label: <strong>1818</strong>
  },
  1999: '1999',
  2010: '2010',
  2019: {
    style: {
      color: '#ff5500',
    },
    label: <strong>2019</strong>,
  },
};

const config = {
  rangeSelector: {
    selected: 1,
    inputEnabled: false
  },
  title: {
    text: 'AAPL Stock Price'
  },
  series: [{
    type: 'area',
    name: 'AAPL',
    fillOpacity: 0.1,
    data: null,
    tooltip: {
      valueDecimals: 2
    },
  }]
};

const Chart = (props) => {
  const {getHighStockAction} = props;
  const {isLoading, data, error} = props.chartProps;

  useEffect(() => {
    getHighStockAction();
  }, [getHighStockAction]);

  const renderChart = () => {
    config.series[0].data = data;

    return (
      <div className='container shadow-sm p-3 mb-5 bg-white rounded chart-container'>
        <RangeSlider marks={marks}/>
        <ReactHighCharts config={config}/>
      </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getHighStockAction: () => dispatch(getHighStockAction()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
