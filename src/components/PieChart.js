import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactHighcharts from 'react-highcharts';

import { getPieData } from '../redux/actions/pieActions';
import ReactHighcharts from 'react-highcharts/';

import { getPieData } from '../redux/actions/pieActions';

const PieChart = (props) => {
  const { getPieData } = props;
  const {
    pieProps: { isLoading, data },
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
    <ReactHighcharts config={config} />
  );
};

const mapStateToProps = (props) => ({
  pieProps: props.pieReducer,
  sliderProps: props.sliderReducer
});

export default connect(mapStateToProps, {
  getPieData
})(PieChart);
