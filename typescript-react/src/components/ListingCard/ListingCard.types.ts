export type postalAddress = {
    street_address: string;
    postal_code: string;
    city: string;
    country: string;
  };
  
  export type listing = {
    id: string;
    created_date: Date;
    updated_date: Date;
    name: string;
    postal_address: postalAddress;
    description: string;
    building_type: 'STUDIO' | 'APARTMENT' | 'HOUSE';
    latest_price_eur: number;
    surface_area_m2: number;
    rooms_count: number;
    bedrooms_count: number;
    contact_phone_number: string;
  };
  
  export type listingProps = {
    listing: listing;
  };