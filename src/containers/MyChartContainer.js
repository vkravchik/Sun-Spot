import React from 'react';
import { useSelector } from 'react-redux';

import SearchForm from '../components/SearchForm';
import Mychart from '../components/MyChart';

const MyChartContainer = () => {
  const data = useSelector((state) => state.customChartReducer.data);

  return (
    <>
      <div className="container shadow-sm p-3 mb-5 bg-white rounded chart-container">
        <SearchForm/>
        <Mychart data={data}/>
      </div>
    </>
  );
};

export default MyChartContainer;
