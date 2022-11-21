import axios from 'axios';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import RandomFact from '../../../src/components/RandomFact';

export const RANDOM_FACT = 'First sentence. Second Sentence. ';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('RandomFact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  it('renders correctly', () => {
    expect(() => render(<RandomFact />)).not.toThrow();
  });

  it('matches snapshot', () => {
    expect(render(<RandomFact />)).toMatchSnapshot();
  });

  it('renders a random fact', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        fact: RANDOM_FACT,
      },
    });

    const { getByText } = render(<RandomFact />);

    await waitForElementToBeRemoved(() => screen.getByTestId('failed'));

    expect(getByText('Random Football Fact')).toBeDefined();
    expect(getByText('First sentence.')).toBeDefined();
  });
});
