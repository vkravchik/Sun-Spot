import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFbToTime } from '../redux/actions/matchesActions';
import ScatterPlot from '../components/ScatterPlot';
import Loading from '../components/Loading';

const ScatterPlotContainer = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.matchesReducer.isLoading);
  const ratioFbTimeToGameTime = useSelector((state) => state.matchesReducer.ratioFbTimeToGameTime);

  const fbTitle = 'First Blood';

  useEffect(() => {
    dispatch(getFbToTime());
  }, []);

  const contentRender = () => (
    <ScatterPlot data={ratioFbTimeToGameTime} title={fbTitle}/>
  );

  return (
    <>
      <div className="container shadow-sm p-3 mb-5 bg-white rounded chart-container">
        { isLoading && <Loading/> }
        { !isLoading && contentRender()}
      </div>
    </>
  );
};

export default ScatterPlotContainer;
