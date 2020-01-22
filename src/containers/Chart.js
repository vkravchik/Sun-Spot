import React, { Component } from 'react';
import ReactHighCharts from 'react-highcharts/ReactHighstock';
import { connect } from 'react-redux';
import { getHighStockAction, toggleChartTypeAction } from '../redux/actions/chartActions';
import RangeSlider from '../components/RangeSlider';
import {Switch} from "antd";

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

class Chart extends Component {

  componentDidMount() {
    this.props.getHighStockAction();
  }

  render() {
    const { isLoading, data, type, error } = this.props.chartProps;

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
      value ? this.props.toggleChartTypeAction('area') : this.props.toggleChartTypeAction('column')
    };

    const renderChart = () => {
      config.series[0].data = data;

      return (
        <div className='container shadow-sm p-3 mb-5 bg-white rounded chart-container'>
          <RangeSlider marks={marks} />
          <Switch defaultChecked onChange={onChange} />
          <ReactHighCharts config={config} />
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
  }
}

const mapStateToProps = (state) => {
  return {
    chartProps: state.chartReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHighStockAction: () => dispatch(getHighStockAction()),
    toggleChartTypeAction: (type) => dispatch(toggleChartTypeAction(type)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
