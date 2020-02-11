import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Table } from 'antd';
import Loading from '../components/Loading';
import DataTable from '../components/DataTable';
import { startShowExpandedRow, getExpandedMatchesList, getMatchesList } from '../redux/actions/matchesActions';
import { COLUMNS, NESTED_COLUMNS } from '../common/constants/tableConstants';

const DataTableContainer = (props) => {
  const {
    getMatchesList,
    getExpandedMatchesList,
    startShowExpandedRow,
    matchesProps: {
      isLoading,
      data,
      nestedData,
      expandedData
    }
  } = props;

  const columns = COLUMNS;
  const nestedColumns = NESTED_COLUMNS;

  const expandedRowRender = (row) => {
    // eslint-disable-next-line no-empty
    if (expandedData.some((el) => el === row.key)) {
    } else {
      startShowExpandedRow(row.key);
      getExpandedMatchesList(row.key);
    }

    return <Table columns={nestedColumns} dataSource={nestedData[row.key]} pagination={false} />;
  };

  useEffect(() => {
    getMatchesList();
  }, [getMatchesList]);

  return (
    <>
      <div className="container shadow-sm p-3 mb-5 bg-white rounded chart-container scroll">
        { isLoading && <Loading/> }
        { !isLoading && <DataTable
          columns={columns}
          data={data}
          expandedRowRender={expandedRowRender} /> }
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  matchesProps: state.matchesReducer
});

export default connect(mapStateToProps, {
  getMatchesList,
  getExpandedMatchesList,
  startShowExpandedRow
})(DataTableContainer);
