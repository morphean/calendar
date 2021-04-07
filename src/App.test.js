import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a calendar entry', () => {
  render(<App />);
  const linkElement = screen.getByText(/09\:00\:00/i);
  expect(linkElement).toBeInTheDocument();
});
