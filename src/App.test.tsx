import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';
import { randomRing } from './Ring';
import { assert } from 'console';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Ring length is right on random', () => {
  const ring = randomRing()
  expect(ring?.length).toBe(3)
})
