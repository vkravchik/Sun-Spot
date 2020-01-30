import React, { useEffect } from 'react';
import { notification } from 'antd';
import { removeError } from "../redux/actions/errorHandlerActions";
import { connect } from "react-redux";

const Error = ({error, removeError}) => {

  useEffect(() => {
    openNotificationWithIcon('error', 'bottomRight', 3);
  });

  const openNotificationWithIcon = (type, placement, duration) => {
    notification[type]({
      message: 'Error',
      description:
        error.message,
      placement,
      duration
    });
    setTimeout(() => {
      removeError()
    }, duration * 1000+100)
  };

  return (
    <>
    </>
  )
};

export default connect(null, {
  removeError
})(Error)
