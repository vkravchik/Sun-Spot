import { Switch } from "antd";
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import RangeSlider from '../components/RangeSlider';
import ReactHighCharts from 'react-highcharts/ReactHighstock';
import { getHighStockAction, getInitialChartConfigAction, toggleChartTypeAction } from '../redux/actions/chartActions';

import '../styles/Chart.scss';

const Chart = (props) => {

  const {getInitialChartConfigAction, getHighStockAction, toggleChartTypeAction} = props;
  const {isLoading, data, type, error, initialConfig} = props.chartProps;

  useEffect(() => {
    getInitialChartConfigAction();
    getHighStockAction();
  }, [getInitialChartConfigAction, getHighStockAction]);

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
      data: null,
      tooltip: {
        valueDecimals: 2
      },
    }]
  };

  const onChange = (value) => {
    value ? toggleChartTypeAction('area') : toggleChartTypeAction('column')
  };

  const renderChart = () => {
    config.series[0].data = data;

    return (
      <div className='container shadow-sm p-3 mb-5 bg-white rounded chart-container'>
        <RangeSlider initialConfig={initialConfig}/>
        <ReactHighCharts config={config}/>
        <div className="row">
          <div className="col-md-6">
            Switch Chart Type
            <Switch
              className='row-switch'
              checkedChildren="A"
              unCheckedChildren="C"
              defaultChecked
              onChange={onChange}/>
          </div>
        </div>
      </div>
    )
  };

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
    chartProps: state.chartReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHighStockAction: () => dispatch(getHighStockAction()),
    getInitialChartConfigAction: () => dispatch(getInitialChartConfigAction()),
    toggleChartTypeAction: (type) => dispatch(toggleChartTypeAction(type)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
