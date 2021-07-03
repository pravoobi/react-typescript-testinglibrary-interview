import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent, waitFor } from '../../test/test-utils';

import About from './About';

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
  render(<About />);
  expect(screen.getByText('About Page')).toBeInTheDocument();
  screen.getByText((content, element) => content.startsWith('Current Count:'));
  expect(screen.getByText('Increment')).toBeInTheDocument();
  
});

it('clicks button and fires increment counter', async () => {
  // You should be able to click the increment button and verify the count.
  render(<About />);
  fireEvent.click(screen.getByText('Increment'));
  await waitFor(() => {
    return screen.getByText('Current Count: 1')
  }
  );
});
