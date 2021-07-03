import React from 'react';
import { render, fireEvent, screen, waitFor } from '../../test/test-utils';

import LayoutContainer from './LayoutContainer';

it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  render(<LayoutContainer />);
  fireEvent.click(screen.getByText('Go to about'));
  await waitFor(() => {
    return screen.getByText('About Page');
  }
  );
});
