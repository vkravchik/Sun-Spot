import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loading from '../components/Loading';
import PieChart from '../components/PieChart';
import { getHeroesAttackType, getHeroesPrimaryAttr } from '../redux/actions/heroesActions';

const PieChartContainer = (props) => {
  const {
    getHeroesAttackType,
    getHeroesPrimaryAttr,
    heroesProps: { isLoading, dataAttackType, dataPrimaryAttr }
  } = props;
  const titleAttackType = 'Attack Type';
  const titlePrimaryAttr = 'Primary Attr';

  useEffect(() => {
    getHeroesAttackType();
  }, [getHeroesAttackType]);

  useEffect(() => {
    getHeroesPrimaryAttr();
  }, [getHeroesPrimaryAttr]);

  const contentRender = () => (
    <div className="row">
      <div className="col-md-6">
        <PieChart data={dataAttackType} title={titleAttackType}/>
      </div>
      <div className="col-md-6">
        <PieChart data={dataPrimaryAttr} title={titlePrimaryAttr}/>
      </div>
    </div>
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
  heroesProps: state.heroesReducer
});

export default connect(mapStateToProps, {
  getHeroesAttackType,
  getHeroesPrimaryAttr
})(PieChartContainer);
