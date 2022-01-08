import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import EditView from './EditView';

test('EditView should render a name', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/17/edit']}>
      <Route exact path="/dogs/:id/edit" component={EditView} />
    </MemoryRouter>
  );

  await screen.findByDisplayValue('sterinway');

  expect(container).toMatchSnapshot();
});
