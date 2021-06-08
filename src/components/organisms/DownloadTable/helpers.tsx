import * as React from 'react';

import { uniqueKey } from 'shared/helpers';

import { Checkbox, Row } from 'components/atoms';
import { ImageLabel } from 'components/molecules';

import { TableData, TableHeader } from './@types';

const generateBody = (
  tableData: TableData[],
  tableHeaders: TableHeader[],
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
): JSX.Element[] =>
  tableData.map((data, idx) => (
    <Row
      key={uniqueKey()}
      className={`${'selected' in data && data.selected && 'selected-row'}`}
    >
      {tableHeaders.map(({ key }) =>
        key === 'selected' ? (
          <td key={uniqueKey()}>
            <Checkbox
              name={data.name}
              value={data.selected}
              indeterminate={false}
              onChange={onChange}
              disabled={data.status.toLowerCase() !== 'available'}
              ariaLabel={`Row ${idx} Checkbox`}
            />
          </td>
        ) : (
          <td key={uniqueKey()}>
            {key in data &&
              (key === 'status' ? (
                <ImageLabel
                  ariaHidden={true}
                  icon="circle"
                  imageClass={`status-${data[key]}`}
                  label={data[key]}
                  labelClass={`margin-right-8 title-case`}
                />
              ) : (
                data[key]
              ))}
          </td>
        )
      )}
    </Row>
  ));

const generateHeaders = (tableHeaders: TableHeader[]): JSX.Element => (
  <Row>
    {tableHeaders.map(({ label }) => (
      <th key={uniqueKey()}>{label}</th>
    ))}
  </Row>
);

export { generateBody, generateHeaders };
