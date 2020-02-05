import React from 'react';
import ReactHighcharts from 'react-highcharts';

const ScatterPlot = (props) => {
  const { data, title } = props;

  const config = {
    chart: {
      type: 'scatter'
    },
    title: {
      text: 'Ratio of Game Time to First Blood Time'
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Game Time (min)'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'Time of FB (min)'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      y: 70,
      floating: true,
      borderWidth: 1
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: 'rgb(100,100,100)'
            }
          }
        },
        states: {
          hover: {
            marker: {
              enabled: false
            }
          }
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: '{point.x} Game, {point.y} FB'
        }
      }
    },
    series: [{
      name: title,
      color: 'rgba(223, 83, 83, .5)',
      data
    }]
  };

  return (
    <ReactHighcharts config={config} />
  );
};

export default ScatterPlot;
