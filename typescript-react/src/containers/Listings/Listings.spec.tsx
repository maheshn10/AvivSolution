import { render, act, screen, waitFor  } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../mocks/server';

import Listings from './Listings';
import useListing from '@/hooks/useListing';
import { ResultType } from '@remix-run/router/dist/utils';

describe('<Listings /> test suite', () => {
  it('Should render the <Listings /> component', () => {
    render(<Listings />);
    const txtMainListing = screen.getByText('Main Listings page');
    expect(txtMainListing).toBeInTheDocument();
    const txtAddListing = screen.getByText('Add a listing');
    expect(txtAddListing).toBeInTheDocument();
    const txtListing = screen.getByText('Listings');
    expect(txtListing).toBeInTheDocument();
  });

  test('Renders Listngs', async () => {    
    await act( async () => await render(<Listings />));
    const txtDescription = screen.queryAllByText('Property description:');
    expect(txtDescription).toHaveLength(2);
  })

  test('Renders Error', async () => {
    server.use(
      rest.get(
        'http://localhost:8080/listings',
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )
    await act( async () => await render(<Listings />));
    const error = await waitFor(() => screen.findByText('Error fetching data'));
    expect(error).toBeInTheDocument();
  })
});
