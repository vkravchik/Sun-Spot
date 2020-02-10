import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'antd';

import { toggleChartTypeStart } from '../redux/actions/switchTypeActions';
import { CHART_TYPE_AREA, CHART_TYPE_COLUMN } from '../common/constants/switchTypeConstants';

const SwitchType = (props) => {
  const { toggleChartTypeStart } = props;
  const { title } = props;

  const onChange = (value) => {
    value ? toggleChartTypeStart(CHART_TYPE_AREA) : toggleChartTypeStart(CHART_TYPE_COLUMN);
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
