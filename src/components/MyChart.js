import React from 'react';
import ReactHighcharts from 'react-highcharts';

const Mychart = (props) => {
  const { data } = props;

  const config = {

    chart: {
      type: 'column'
    },

    title: {
      text: 'Highcharts responsive chart'
    },

    subtitle: {
      text: 'Resize the frame or click buttons to change appearance'
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

export default Mychart;
