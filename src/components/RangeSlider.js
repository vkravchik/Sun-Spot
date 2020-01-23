import React from 'react';
import { connect } from 'react-redux';
import { Slider, Button } from 'antd';
import { getHighStockAction } from "../redux/actions/chartActions";

const RangeSlider = (props) => {
  const {getHighStockAction} = props;
  const {initialConfig: {min, max, defaultStart, defaultFinish}} = props.ownProps;

  const onAfterChange = (value = []) => {
    const dateObj = {
      start_date: value[0] || defaultStart,
      finish_date: value[1] || defaultFinish,
    };

    getHighStockAction(dateObj);
  };

  return (
    <>
      <Slider range
              marks={prepareSliderMarks(min, max, defaultStart, defaultFinish)}
              min={min}
              max={max}
              onAfterChange={onAfterChange}/>
      <Button type="primary" shape="round" icon="filter" size='small'>
        Filter
      </Button>
    </>
  )
};

const prepareSliderMarks = (min, max, defaultStart, defaultFinish) => {
  const marks = {};

  marks[min] = {
    label: <strong>{min}</strong>
  };

  if (defaultStart && defaultFinish) {
    marks[defaultStart] = (defaultFinish - defaultStart >= 7) ? defaultStart
      : {
        style: {
          top: '-40px'
        },
        label: defaultStart
      };
    marks[defaultFinish] = defaultFinish;
  }

  marks[max] = {
    style: {
      color: '#ff5500',
    },
    label: <strong>{max}</strong>,
  };

  return marks;
};

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
