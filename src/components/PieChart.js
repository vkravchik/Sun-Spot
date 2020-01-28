import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactHighcharts from 'react-highcharts/';

import { getPieAction } from '../redux/actions/pieActions';
import { Error } from './Error';

const PieChart = (props) => {
  const { getPieAction } = props;
  const {
    pieProps: { isLoading, data, error },
    sliderProps: {
      initialConfig: { defaultStart, defaultFinish }
    }
  } = props;

  useEffect(() => {
    getPieAction();
  }, [getPieAction]);

  const config = {
    chart: {
      events: {
        load: function () {
          this.showLoading();
          if (!isLoading) {
            this.hideLoading();
          }
        }
      },
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: `Observations since ${defaultStart} to ${defaultFinish}`
    },
    tooltip: {
      pointFormat: `{series.name}:<b>{point.percentage:.1f}%</b>`
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Observations',
      colorByPoint: true,
      data: data,
    }]
  };

  return (
    error ? <Error error={error} /> : <ReactHighcharts config={config} />
  )
};

const mapStateToProps = (props) => ({
  pieProps: props.pieReducer,
  sliderProps: props.sliderReducer
});

export default connect(mapStateToProps, {
  getPieAction
})(PieChart)
