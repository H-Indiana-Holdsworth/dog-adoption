import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogCard from '../Views/DogCard';

test('DogCard should render header', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/10']}>
      <Route exact path="/dogs/:id">
        <DogCard match={{ params: { id: 10 } }} />
      </Route>
    </MemoryRouter>
  );

  await screen.findByText('Meet Barton');

  expect(container).toMatchSnapshot();
});
