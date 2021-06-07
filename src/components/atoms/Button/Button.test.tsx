import * as React from 'react';

import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  test('Button renders correctly', () => {
    render(<Button type="button" onClick={jest.fn()} />);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  });
});
