import React from 'react';
import { Input } from 'antd';

export const renderInput = (props) => {
  const { input, type, placeholder } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Input {...input} type={type} placeholder={placeholder} />
  );
};
