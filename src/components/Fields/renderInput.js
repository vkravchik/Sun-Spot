import React from 'react';
import { Input } from 'antd';

export const renderInput = (props) => (
  // eslint-disable-next-line react/destructuring-assignment,react/jsx-props-no-spreading
    <Input {...props.input} type={props.type} placeholder={props.placeholder} />
);
