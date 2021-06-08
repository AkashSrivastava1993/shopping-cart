import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import '@testing-library/jest-dom';

it('renders', () => {
  const { asFragment } = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
});

