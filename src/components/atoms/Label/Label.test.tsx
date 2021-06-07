import * as React from 'react';

import { render, screen } from '@testing-library/react';

import Label from './Label';

describe('<Label />', () => {
  test('Label renders correctly', () => {
    render(<Label value="Test Label" />);
    const text = screen.getByText('Test Label');
    expect(text).toBeInTheDocument();
  });
});
