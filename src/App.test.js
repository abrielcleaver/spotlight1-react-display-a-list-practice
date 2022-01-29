import { render, screen } from '@testing-library/react';
import App from './App';

test('renders plant name', () => {
  render(<App />);
  const plantName = screen.getByText(/philodendron/i);
  expect(plantName).toBeInTheDocument();
});
