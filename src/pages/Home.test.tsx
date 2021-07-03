import React from 'react';
import { render, screen } from '../../test/test-utils';

import Home from './Home';

it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
  render(<Home />);
  expect(screen.getByText('Welcome!')).toBeInTheDocument();
  const aboutElement = screen.getByText(/Go to about/i);
  expect(aboutElement).toBeInTheDocument();
});
