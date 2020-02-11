import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from 'antd';

import { startCreateCustomChart } from '../redux/actions/customChartActions';

const SearchForm = (props) => {
  const { form: { getFieldDecorator } } = props;
  const dispatch = useDispatch();

  const handleSubmit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(startCreateCustomChart(values.matchId));
      }
    });
  };

  return (
    <>
      <Form>
        <Form.Item>
          {getFieldDecorator('matchId', {
            rules: [{ required: true, message: 'Please input match ID' }]
          })(
            <Input.Search placeholder="Enter match ID" onSearch={handleSubmit} enterButton="Create Chart" />
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default Form.create({ name: 'searchForm' })(SearchForm);
