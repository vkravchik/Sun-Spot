import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import { removeError } from '../redux/actions/errorHandlerActions';

const Error = ({ error, removeError }) => {
  const openNotificationWithIcon = (type, placement, duration) => {
    notification[type]({
      message: 'Error',
      description:
      error.message,
      placement,
      duration
    });
    setTimeout(() => {
      removeError();
    }, duration * 1000 + 100);
  };

  useEffect(() => {
    openNotificationWithIcon('error', 'bottomRight', 3);
  });

  return null;
};

export default connect(null, {
  removeError
})(Error);
