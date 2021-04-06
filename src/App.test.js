import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a calendar entry', () => {
  render(<App />);
  const linkElement = screen.get(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
