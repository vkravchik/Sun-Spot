import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import SearchForm from '../components/SearchForm';
import Loading from '../components/Loading';
import MyChart from '../components/MyChart';
import { startCreateCustomChart } from '../redux/actions/customChartActions';

const MyChartContainer = () => {
  const { data, isLoading } = useSelector((state) => ({
    data: state.customChartReducer.data,
    isLoading: state.customChartReducer.isLoading
  }), shallowEqual);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(startCreateCustomChart(values.matchId));
  };

  return (
    <>
      <div className="container shadow-sm p-3 mb-5 bg-white rounded chart-container">
        <SearchForm onSubmit={handleSubmit}/>
        { isLoading && <Loading/> }
        { !isLoading && <MyChart data={data} /> }
      </div>
    </>
  );
};

export default MyChartContainer;
