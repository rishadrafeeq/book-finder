import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Book Finder title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Book Finder/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders search input', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Search by title/i);
  expect(searchInput).toBeInTheDocument();
});

test('renders search button', () => {
  render(<App />);
  const searchButton = screen.getByText(/Search/i);
  expect(searchButton).toBeInTheDocument();
});
