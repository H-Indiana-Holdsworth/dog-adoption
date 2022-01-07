import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogCard from '../Views/DogCard';

test('DogCard should render header', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/5']}>
      <Route exact path="/dogs/:id">
        <DogCard match={{ params: { id: 5 } }} />
      </Route>
    </MemoryRouter>
  );

  await screen.findByText('Meet Lil Mark');

  expect(container).toMatchSnapshot();
});
