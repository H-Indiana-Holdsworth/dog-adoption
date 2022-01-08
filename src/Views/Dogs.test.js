import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dogs from './Dogs';

test('should render Dogs component', async () => {
  const { container } = render(
    <MemoryRouter>
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
