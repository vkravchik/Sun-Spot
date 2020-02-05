import React from 'react';
import ReactHighcharts from 'react-highcharts';

const PieChart = (props) => {
  const { data, title } = props;

  const config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: title
    },
    tooltip: {
      pointFormat: '{series.name}:<b>{point.y}({point.percentage:.1f}%)</b>'
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
      name: title,
      colorByPoint: true,
      data
    }]
  };

  return (
    <ReactHighcharts config={config} />
  );
};

export default PieChart;
