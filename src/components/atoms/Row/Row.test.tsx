import * as React from 'react';

import { render, screen } from '@testing-library/react';

import Row from './Row';

test('Row renders correctly', () => {
  render(
    <table>
      <tbody>
        <Row>
          <td>Test Data</td>
        </Row>
      </tbody>
    </table>
  );
  const text = screen.getByText('Test Data');
  expect(text).toBeInTheDocument();
});
