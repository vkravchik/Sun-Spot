import React from 'react';
import { Table } from 'antd';

const DataTable = (props) => {
  const { data, columns, expandedRowRender } = props;
  const pagination = {
    defaultPageSize: 25
  };

  return (
    <>
        <Table
            pagination={pagination}
            columns={columns}
            expandedRowRender={expandedRowRender}
            dataSource={data} />
    </>
  );
};

export default DataTable;
