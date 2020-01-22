import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Slider } from 'antd';
import { getHighStockAction } from "../redux/actions/chartActions";

// const min = 1818,
//   max = 2019,
//   defaultStart = 1999,
//   defaultFinish = 2010;

class RangeSlider extends Component {

  render() {
    const {marks, initialConfig: {min, max, defaultStart, defaultFinish}} = this.props.ownProps;

    const onAfterChange = (value) => {
      const dateObj = {
        start_date: value[0],
        finish_date: value[1],
      };
      this.props.getHighStockAction(dateObj);
    };

    return (
      <Slider range
              marks={marks}
              min={min}
              max={max}
              defaultValue={[defaultStart, defaultFinish]}
              onAfterChange={onAfterChange}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHighStockAction: (dateObj) => dispatch(getHighStockAction(dateObj)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider)
