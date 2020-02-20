import React from 'react';
import { Table } from 'antd';

const DataTable = (props) => {
  const { data, columns, expandedRowRender, loading } = props;
  const pagination = {
    defaultPageSize: 25
  };

  return (
    <>
        <Table
            className="components-table-demo-nested"
            pagination={pagination}
            columns={columns}
            loading={loading}
            expandedRowRender={expandedRowRender}
            dataSource={data} />
    </>
  );
};

export default DataTable;
