import React from 'react';
import { Table } from 'antd';

const DataTable = (props) => {
  const { data, columns, expandedRowRender } = props;

  return (
    <>
        <Table
            className="components-table-demo-nested"
            columns={columns}
            expandedRowRender={expandedRowRender}
            dataSource={data} />
    </>
  );
};

export default DataTable;
