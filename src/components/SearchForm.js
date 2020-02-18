import React, { createRef } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'antd';

import { renderInput } from './Fields/renderInput';


const SearchForm = (props) => {
  const { handleSubmit } = props;

  const formRef = createRef();

  const formSubmitClick = () => {
    handleSubmit();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Field
        name="matchId"
        component={renderInput}
        type="text"
        placeholder="Enter match ID"
      />
      <Button type="primary" onClick={formSubmitClick}>Create</Button>
    </form>
  );
};

export default reduxForm({
  form: 'searchForm'
})(SearchForm);
