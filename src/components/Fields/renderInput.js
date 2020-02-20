import React from 'react';
import { Input } from 'antd';

export const renderInput = (props) => {
  const {
    input, type, placeholder, meta
  } = props;

  return (
    <>
      <Input
        {...input}
        className={meta.error && meta.touched && 'error-input'}
        type={type}
        placeholder={placeholder} />
      {
        meta.error && meta.touched &&
        <div className="error">
          {meta.error}
        </div>
      }
    </>
  );
};
