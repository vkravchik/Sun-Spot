import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFbToTime } from '../redux/actions/matchesActions';
import ScatterPlot from '../components/ScatterPlot';
import Loading from '../components/Loading';

const ScatterPlotContainer = (props) => {
  const {
    getFbToTime,
    matchesProps: {
      isLoading,
      ratioFbTimeToGameTime
    }
  } = props;
  const fbTitle = 'First Blood';

  useEffect(() => {
    getFbToTime();
  }, [getFbToTime]);

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

const mapStateToProps = (state) => ({
  matchesProps: state.matchesReducer
});

export default connect(mapStateToProps, {
  getFbToTime
})(ScatterPlotContainer);
