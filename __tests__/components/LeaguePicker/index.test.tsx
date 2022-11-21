import { render } from '@testing-library/react';
import LeaguePicker from 'src/components/LeaguePicker';

describe('LeaguePicker', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  it('renders correctly', () => {
    expect(() => render(<LeaguePicker />)).not.toThrow();
  });

  it('matches snapshot', () => {
    expect(render(<LeaguePicker />)).toMatchSnapshot();
  });
});
