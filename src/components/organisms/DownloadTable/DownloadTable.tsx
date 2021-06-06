import * as React from 'react';

import { TableData, TableHeader } from './@types';
import { generateBody, generateHeaders } from './helpers';

interface propTypes {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  tableData: TableData[];
  tableHeaders: TableHeader[];
}

const DownloadTable: React.FC<propTypes> = (props: propTypes) => {
  const { onChange, tableData, tableHeaders } = props;

  return (
    <table className="download-table">
      <thead>{generateHeaders(tableHeaders)}</thead>
      <tbody>{generateBody(tableData, tableHeaders, onChange)}</tbody>
    </table>
  );
};

export default DownloadTable;
