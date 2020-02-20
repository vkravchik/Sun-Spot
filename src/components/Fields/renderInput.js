import React from 'react';
import { Input } from 'antd';

export const renderInput = (props) => {
  const {
    input, type, placeholder, meta
  } = props;

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Input className={meta.error && meta.touched && 'error-input'} {...input} type={type} placeholder={placeholder} />
      {
        meta.error && meta.touched &&
        <div className="error">
          {meta.error}
        </div>
      }
    </>
  );
};
