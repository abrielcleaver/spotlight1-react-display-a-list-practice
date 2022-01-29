import { render, screen } from '@testing-library/react';
import App from './App';

test('renders plant name', () => {
  render(<App />);
  const plantName = screen.getByText(/swiss cheese plant/i);
  expect(plantName).toBeInTheDocument();
});
