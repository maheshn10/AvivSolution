import { renderHook, act, screen, waitFor } from '@testing-library/react'
import usePriceHistory  from './usePriceHistory';
import { rest } from 'msw'
import { server } from '../../mocks/server'

describe("usePriceHistory", () => {
    const priceHistory = [
        {
        created_date: "2023-01-12T09:23:36Z",
        price_eur: 100000
        },
        {
        created_date: "2023-01-17T08:17:32Z",
        price_eur: 150000
        }
        ]
    it("initial data state is loading and data empty", async () => {
      const { result } = await renderHook(() => usePriceHistory('http://localhost:8080/listings/1/prices'));
      await waitFor(() =>{
     expect(result.current).toEqual({ isLoading: true, error:'', data: [] });
      });
    });
  
    it("Data is fetched and loading is complete", async () => {
        const { result } = await renderHook(() => usePriceHistory('http://localhost:8080/listings/1/prices'));
        

        // rerender();
        await act(async () => {
        await waitFor(() =>{
            screen.debug();expect(result.current).toEqual({ isLoading: true, error:'', data: [] });
        });
    });

    await act(async () => {
        await waitFor(() =>{
            screen.debug();expect(result.current).toEqual({ isLoading: false, error:'', data: priceHistory });
        });
    });
    });
  });