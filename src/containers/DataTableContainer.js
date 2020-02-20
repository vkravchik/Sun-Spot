import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Table } from 'antd';
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
      isLoadingNested,
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

    return <Table
      columns={nestedColumns}
      dataSource={nestedData[row.key]}
      pagination={false}
      loading={isLoadingNested} />;
  };

  useEffect(() => {
    getMatchesList();
  }, [getMatchesList]);

  return (
    <>
      <div className="container shadow-sm p-3 mb-5 bg-white rounded chart-container scroll">
        <DataTable
          columns={columns}
          data={data}
          loading={isLoading}
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
  getExpandedMatchesList,
  startShowExpandedRow
})(DataTableContainer);
