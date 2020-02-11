import React from 'react';
import { useSelector } from 'react-redux';

import SearchForm from '../components/SearchForm';
import Mychart from '../components/MyChart';

const MyChartContainer = () => {
  const data = useSelector((state) => state.customChartReducer.data);

  return (
    <>
      <SearchForm/>
      <Mychart data={data}/>
    </>
  );
};

export default MyChartContainer;
