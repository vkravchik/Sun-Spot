import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchForm from '../components/SearchForm';
import MyChart from '../components/MyChart';
import { startCreateCustomChart } from '../redux/actions/customChartActions';

const MyChartContainer = () => {
  const data = useSelector((state) => state.customChartReducer.data);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(startCreateCustomChart(values.matchId));
  };

  return (
    <>
      <div className="container shadow-sm p-3 mb-5 bg-white rounded chart-container">
        <SearchForm onSubmit={handleSubmit}/>
        <MyChart data={data}/>
      </div>
    </>
  );
};

export default MyChartContainer;
