import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'antd';

import { toggleChartTypeAction } from '../redux/actions/switchTypeActions';

const SwitchType = (props) => {
  const {toggleChartTypeAction} = props;
  const {title} = props;

  const onChange = (value) => {
    value ? toggleChartTypeAction('area') : toggleChartTypeAction('column')
  };

  return (
    <div className="row">
      <div className="col-md-6">
        {title}
        <Switch
          className='row-switch'
          checkedChildren="A"
          unCheckedChildren="C"
          defaultChecked
          onChange={onChange}/>
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  title: ownProps.title
});

export default connect(mapStateToProps, {
  toggleChartTypeAction
})(SwitchType)
