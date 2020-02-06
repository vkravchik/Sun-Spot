import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DataTable from '../components/DataTable';
import { getExpandedMatchesList, getMatchesList } from '../redux/actions/matchesActions';

const DataTableContainer = (props) => {
  const {
    getMatchesList,
    getExpandedMatchesList,
    matchesProps: {
      isLoading,
      data,
      expandedData
    }
  } = props;

  const columns = [];
  const newData = [];

  const createColumnsAndData = (data) => {
    if (data.length) {
      Object.keys(data[0]).forEach((el) => {
        columns.push({
          title: el,
          dataIndex: el,
          key: el
        });
      });

      data.forEach((el) => {
        const obj = [];
        columns.map((ele) => ele.key).forEach((key) => {
          obj.push({
            [key]: el[key]
          });
        });

        newData.push(Object.assign({ key: el.match_id }, ...obj));
      });
    }
  };

  useEffect(() => {
    getMatchesList();
  }, [getMatchesList]);

  createColumnsAndData(data);


  return (
    <>
        <DataTable />
    </>
  );
};

const mapStateToProps = (state) => ({
  matchesProps: state.matchesReducer
});

export default connect(mapStateToProps, {
  getMatchesList,
  getExpandedMatchesList
})(DataTableContainer);
