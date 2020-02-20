import React, { createRef } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'antd';

import { renderInput } from './Fields/renderInput';
import { requiredField } from './Fields/validate';


const SearchForm = (props) => {
  const { handleSubmit } = props;

  const formRef = createRef();

  const formSubmitClick = () => {
    handleSubmit();
  };

  return (
    <Form
      className="searchForm"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <Form.Item>
        <Field
          name="matchId"
          component={renderInput}
          validate={[requiredField]}
          type="text"
          placeholder="Enter match ID"
        />
      </Form.Item>
      <Button type="primary" onClick={formSubmitClick}>Create</Button>
    </Form>
  );
};

export default reduxForm({
  form: 'searchForm',
  requiredField
})(SearchForm);
