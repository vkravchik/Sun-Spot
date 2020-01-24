import React, { useEffect } from "react";
import { connect } from "react-redux";
import PieChart from "../components/PieChart";
import RangeSlider from "../components/RangeSlider";
import { getHighStockConfigAction } from "../redux/actions/highStockActions";

const Pie = (props) => {
  const {getHighStockConfigAction} = props;
  const {initialConfig} = props;

  useEffect(() => {
    getHighStockConfigAction();
  },[getHighStockConfigAction]);

  const onAfterChange = (value = []) => {
    const dateObj = {};
    dateObj['start_date'] = value[0];
    dateObj['finish_date'] = value[1];
    console.log(dateObj);
  };

  return (
    <>
      <div className='container shadow-sm p-3 mb-5 bg-white rounded chart-container'>
        <RangeSlider initialConfig={initialConfig} onAfterChange={onAfterChange} />
        <PieChart />
      </div>
      </>
  );
};

const mapStateToProps = (props) => ({
  initialConfig: props.highStockReducer.initialConfig
});

const mapDispatchToProps = (dispatch) => ({
  getHighStockConfigAction: () => dispatch(getHighStockConfigAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pie)
