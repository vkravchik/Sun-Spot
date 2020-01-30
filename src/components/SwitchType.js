import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'antd';

import { toggleChartTypeStart } from '../redux/actions/switchTypeActions';

const SwitchType = (props) => {
  const { toggleChartTypeStart } = props;
  const { title } = props;

  const onChange = (value) => {
    value ? toggleChartTypeStart('area') : toggleChartTypeStart('column');
  };

  return (
    <div className="row">
      <div className="col-md-6 row-switch">
        {title}
        <Switch
          checkedChildren="A"
          unCheckedChildren="C"
          defaultChecked
          onChange={onChange} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  title: ownProps.title
});

export default connect(mapStateToProps, {
  toggleChartTypeStart
})(SwitchType);
