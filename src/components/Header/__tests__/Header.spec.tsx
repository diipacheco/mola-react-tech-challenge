import React from 'react';
import { render } from '@testing-library/react';

import { Header } from '../index';

describe('Header Component', () => {
  it('should be able to render the elements three correctly', () => {
    const container = render(<Header />);

    expect(container).toMatchInlineSnapshot();
  });
});
