import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should renders the div container', () => {
    const { getByTestId } = render(<App />);
    const divContainer = getByTestId('divContainer');
    expect(divContainer).not.toBeNull();
  });
});
