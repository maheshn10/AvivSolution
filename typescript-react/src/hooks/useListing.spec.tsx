import { renderHook, act, screen, waitFor } from '@testing-library/react'
import useListing  from './useListing';
import { rest } from 'msw'
import { server } from '../../mocks/server'

describe("useListing", () => {
    const listing = [
        {
        bedrooms_count: 2,
        building_type: "STUDIO",
        contact_phone_number: "+219779210354",
        created_date: "2023-01-17T14:19:22.808738",
        description: "",
        id: 1,
        latest_price_eur: 710000,
        name: "Mikhail Schmiedt",
        postal_address: {
        city: "Berchtesgaden",
        country: "DE",
        postal_code: "21810",
        street_address: "Johan-Ernst-Ring 7"
        },
        rooms_count: 6,
        surface_area_m2: 167,
        updated_date: "2023-01-17T14:20:47.707666"
        },
        {
        bedrooms_count: 1,
        building_type: "STUDIO",
        contact_phone_number: "+164157880590",
        created_date: "2023-01-17T16:33:35.960921",
        description: "",
        id: 2,
        latest_price_eur: 125000,
        name: "Thibaut Pons-Dos Santos",
        postal_address: {
        city: "Saint Célinaboeuf",
        country: "FR",
        postal_code: "07701",
        street_address: "552, rue de Grégoire"
        },
        rooms_count: 6,
        surface_area_m2: 438,
        updated_date: "2023-01-17T16:33:35.960924"
        }
    ]
    it("Initial data state is loading and data empty", async () => {
      const { result } = await renderHook(() => useListing('http://localhost:8080/listings'));
      await waitFor(() =>{
     expect(result.current).toEqual({ isLoading: true, error:'', data: [] });
      });
    });
  
    it("Data is fetched and loading is complete", async () => {
        const { result } = await renderHook(() => useListing('http://localhost:8080/listings'));
        

        // rerender();
        await act(async () => {
        await waitFor(() =>{
       expect(result.current).toEqual({ isLoading: true, error:'', data: [] });
        });
    });

    await act(async () => {
        await waitFor(() =>{
       expect(result.current).toEqual({ isLoading: false, error:'', data: listing });
        });
    });
    });
  });