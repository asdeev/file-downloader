import * as React from 'react';

import { render, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  test('Checkbox renders correctly', () => {
    render(
      <Checkbox
        name="test-checkbox"
        value={false}
        indeterminate={false}
        onChange={jest.fn()}
      />
    );
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('Checkbox is checkable', () => {
    const { rerender } = render(
      <Checkbox
        name="test-checkbox"
        value={false}
        indeterminate={false}
        onChange={jest.fn()}
      />
    );
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).not.toBeChecked();

    rerender(
      <Checkbox
        name="test-checkbox"
        value={true}
        indeterminate={false}
        onChange={jest.fn()}
      />
    );
    expect(checkbox).toBeChecked();
  });
});
