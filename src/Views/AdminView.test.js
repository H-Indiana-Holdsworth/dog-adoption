import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminView from './AdminView';

test('should render container', () => {
  const { container } = render(
    <MemoryRouter>
      <AdminView />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
