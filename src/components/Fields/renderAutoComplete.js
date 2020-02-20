import React from 'react';
import { AutoComplete } from 'antd';

export const renderAutoComplete = (props) => {
  const {
    input, type, placeholder, meta
  } = props;

  const dataSource = [
    '4558553516',
    '4558404906',
    '4558138970'
  ];

  const filterFunction = (inputValue, option) => option.props.children.indexOf(inputValue) !== -1;

  return (
    <>
      <AutoComplete
        className={meta.error && meta.touched && 'error-input'}
        {...input}
        dataSource={dataSource}
        filterOption={filterFunction}
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
