import axios from 'axios';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import LastSeasonWinners from 'src/components/LastSeasonWinners';

export const RANDOM_FACT = 'First sentence. Second Sentence. ';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('LastSeasonWinners', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  it('renders correctly', () => {
    expect(() => render(<LastSeasonWinners />)).not.toThrow();
  });

  it('matches snapshot', () => {
    expect(render(<LastSeasonWinners />)).toMatchSnapshot();
  });

  it('renders the last season winners', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        name: 'team',
        logo: `https://www.example.com/image-2.png`,
        points: 5,
      },
    });

    const { getByText, container } = render(<LastSeasonWinners />);

    await waitForElementToBeRemoved(() => screen.getByTestId('failed'));

    expect(getByText('Here are the last season winners:')).toBeDefined();
    expect(container.getElementsByTagName('p')).toHaveLength(6);
  });
});
