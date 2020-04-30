import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renderöi sivulle tektin HävikkilaskuriApp', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Hävikkilaskuri/i);
  expect(headerElement).toBeInTheDocument();
});
