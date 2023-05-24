import {rest} from 'msw';

export const handlers = [
    rest.get("http://localhost:8080/listings", (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json([
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
        ])
    )
    }),
    rest.get("http://localhost:8080/listings/1/prices", (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json([
            {
            created_date: "2023-01-12T09:23:36Z",
            price_eur: 100000
            },
            {
            created_date: "2023-01-17T08:17:32Z",
            price_eur: 150000
            }
            ])
    )
    }),
]