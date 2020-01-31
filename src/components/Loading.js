import React from 'react';
import { Spin } from 'antd';

import '../common/styles/Loading.scss';

const Loading = () => (
  <div className="loading-container">
    <Spin size="large" />
  </div>
);

export default Loading;
