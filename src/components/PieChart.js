import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactHighcharts from 'react-highcharts';

import { getPieData } from '../redux/actions/pieActions';
import Error from './Error';

const PieChart = (props) => {
  const { getPieData } = props;
  const {
    pieProps: { isLoading, data, error },
    sliderProps: {
      initialConfig: { defaultStart, defaultFinish }
    }
  } = props;

  useEffect(() => {
    getPieData();
  }, [getPieData]);

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
      pointFormat: '{series.name}:<b>{point.percentage:.1f}%</b>'
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
      data
    }]
  };

  return (
    error ? <Error error={error} /> : <ReactHighcharts config={config} />
  );
};

PieChart.propTypes = {
  getPieData: PropTypes.func.isRequired,

  pieProps: PropTypes.shape({
    isLoading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.object
  }).isRequired,

  sliderProps: PropTypes.shape({
    initialConfig: PropTypes.shape({
      defaultStart: PropTypes.number,
      defaultFinish: PropTypes.number
    })
  }).isRequired
};

const mapStateToProps = (props) => ({
  pieProps: props.pieReducer,
  sliderProps: props.sliderReducer
});

export default connect(mapStateToProps, {
  getPieData
})(PieChart);
