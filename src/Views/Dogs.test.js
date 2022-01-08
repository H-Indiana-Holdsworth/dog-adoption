import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dogs from './Dogs';

test('should render Dogs component', async () => {
  const { container } = render(
    <MemoryRouter>
      {/* <Dogs
        dogs={{
          id: 2,
          name: 'Myra',
          bio: 'Shy.',
          breed: 'Shepard mix',
          image: 'https://placedog.net/500?id=73',
        }}
      /> */}
      <Dogs
        dogs={{
          header: 'Meet Myra',
        }}
      />
    </MemoryRouter>
  );

  await screen.findByText('Meet Myra');

  expect(container).toMatchSnapshot();
});
