import React, { useEffect } from 'react';
import { notification } from 'antd';

export const Error = ({error}) => {

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
  };

  return (
    <>
    </>
  )
};
