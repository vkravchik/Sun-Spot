import React, { useEffect } from "react";
import { connect } from "react-redux";
import ReactHighcharts from "react-highcharts/";

import { getPieAction } from "../redux/actions/pieActions";

const PieChart = (props) => {
  const {getPieAction, pieProps} = props;
  const {isLoading, data, error} = pieProps;


  useEffect(() => {
    getPieAction();
  }, [getPieAction]);

  const config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Observations per all period'
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
    <>
      <ReactHighcharts config={config}/>
    </>
  )
};

const mapStateToProps = (props) => ({
  pieProps: props.pieReducer
});

const mapDispatchToProps = (dispatch) => ({
  getPieAction: () => dispatch(getPieAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(PieChart)
