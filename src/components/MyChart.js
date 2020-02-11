import React from 'react';
import ReactHighcharts from 'react-highcharts';

const MyChart = (props) => {
  const { data } = props;

  const config = {

    chart: {
      type: 'column'
    },

    title: {
      text: ''
    },

    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },

    xAxis: {
      categories: ['GPM', 'XPM'],
      labels: {
        x: -10
      }
    },

    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Amount'
      }
    },

    series: data
  };

  return (
    <ReactHighcharts config={config} />
  );
};

export default MyChart;
