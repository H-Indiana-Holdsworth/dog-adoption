import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import EditView from './EditView';

test('EditView should render header', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/5/edit']}>
      <Route exact path="/dogs/:id/edit" component={EditView} />
    </MemoryRouter>
  );

  await screen.findByDisplayValue('Lil Mark');

  expect(container).toMatchSnapshot();
});
