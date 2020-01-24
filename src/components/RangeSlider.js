import React from 'react';
import { connect } from 'react-redux';
import { Slider, Button } from 'antd';

import { getHighStockAction } from "../redux/actions/highStockActions";

const RangeSlider = (props) => {
  const {getHighStockAction} = props;
  const {initialConfig: {min, max, defaultStart, defaultFinish}} = props.ownProps;

  const dateObj = {};

  const onAfterChange = (value = []) => {
    dateObj['start_date'] = value[0] || defaultStart;
    dateObj['finish_date'] = value[1] || defaultFinish;
    getHighStockAction(dateObj);
  };

  const onApplyFilter = () => {
  };

  return (
    <>
      <div className="row">
        <div className="col-md-11">
          <Slider range
                  marks={prepareSliderMarks(min, max, defaultStart, defaultFinish)}
                  min={min}
                  max={max}
                  onAfterChange={onAfterChange}/>
        </div>
        <div className="col-md-1 text-center filter-container">
          <Button className='align-icon' type="primary" shape="round" icon="filter" size='small' onClick={onApplyFilter}/>
        </div>
      </div>
    </>
  )
};

const prepareSliderMarks = (min, max, defaultStart, defaultFinish) => {
  const marks = {};

  marks[min] = {
    label: <strong>{min}</strong>
  };

  if (defaultStart && defaultFinish) {
    marks[defaultStart] = {
      style: {
        top: (defaultStart - min < 7 && defaultStart - min > 0) || (defaultFinish - defaultStart < 7) ? '-40px' : null
      },
      label: defaultStart
    };
    marks[defaultFinish] = {
      style: {
        top: (max - defaultFinish < 7 && max - defaultFinish > 0) ? '-40px' : null
      },
      label: defaultFinish
    };
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
