import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DataTable from '../components/DataTable';
import { getExpandedMatchesList, getMatchesList } from '../redux/actions/matchesActions';
import { titleCase } from '../common/utils/stringUtils';

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

  const createColumns = (data) => {
    const tempColumns = [];

    if (data.length) {
      Object.keys(data[0]).forEach((el) => {
        tempColumns.push({
          title: titleCase(el),
          dataIndex: el,
          key: el
        });
      });
    }

    return tempColumns;
  };

  const expandedRowRender = (row) => {
    if (!expandedData.length) {
      //  Dispatch push method. Something like that ->
      // expandedData.push(row.key);
    }

    if (expandedData.some((el) => el === row.key)) {
      //  Dispatch remove method. Something like that ->
      // expandedData.splice(expandedData.indexOf(row.key), 1);

    } else {
      //  Dispatch push method. Something like that ->
      // expandedData.push(row.key);
    }

    // TODO: Check is exist object with this key in nestedData and remove or add

    console.log(expandedData);
  };

  useEffect(() => {
    getMatchesList();
  }, [getMatchesList]);

  const columns = createColumns(data);

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
