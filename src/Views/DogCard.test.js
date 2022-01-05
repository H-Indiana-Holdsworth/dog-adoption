import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogCard from './DogCard';

test('DogCard should render header', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/1']}>
      <Route exact path="/dogs/:id" component={DogCard} />
    </MemoryRouter>
  );

  screen.getByText('Meet Barton');

  expect(container).toMatchSnapshot();
});
