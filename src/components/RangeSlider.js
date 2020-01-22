import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Slider } from 'antd';

const min = 1818,
  max = 2019,
  defaultStart = 1999,
  defaultFinish = 2010;

const onAfterChange = (value) => {
  // TODO: Request to server with params start_date && finish_date
  console.log(value);
};

class RangeSlider extends Component {

  render() {
    const {marks} = this.props.ownProps;

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
    ownProps: ownProps
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider)
