import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import HeroesPieChart from '../components/HeroesPieChart';
import Loading from '../components/Loading';
import { getHeroesAttackType, getHeroesPrimaryAttr } from '../redux/actions/heroesActions';

const HeroesContainer = (props) => {
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
        <HeroesPieChart data={dataAttackType} title={titleAttackType}/>
      </div>
      <div className="col-md-6">
        <HeroesPieChart data={dataPrimaryAttr} title={titlePrimaryAttr}/>
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
})(HeroesContainer);
