import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';

import { startCreateCustomChart } from '../redux/actions/customChartActions';

const SearchForm = (props) => {
  const { form: { getFieldDecorator } } = props;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(startCreateCustomChart(values.matchId));
      }
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('matchId', {
            rules: [{ required: true, message: 'Please input match ID' }]
          })(
            <Input placeholder="Match ID" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Create Chart
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Form.create({ name: 'searchForm' })(SearchForm);
