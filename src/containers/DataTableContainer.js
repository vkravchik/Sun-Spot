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
      nestedData,
      expandedData
    }
  } = props;

  const columns = [];

  const createColumnsAndData = (data) => {
    if (data.length) {
      Object.keys(data[0]).forEach((el) => {
        columns.push({
          title: el,
          dataIndex: el,
          key: el
        });
      });
    }
  };

  const expandedRowRender = (row) => {

  };

  useEffect(() => {
    getMatchesList();
  }, [getMatchesList]);

  createColumnsAndData(data);

  return (
    <>
      <div className="container shadow-sm p-3 mb-5 bg-white rounded chart-container">
        <DataTable
          columns={columns}
          data={data}
          expandedRowRender={expandedRowRender} />
      </div>
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
