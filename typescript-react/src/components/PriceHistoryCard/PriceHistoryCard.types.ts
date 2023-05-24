export type tableProps = {
    data: priceHistory[];
    error: string;
    isLoading: boolean;
  };
  
  export type priceHistory = {
    created_date: Date;
    price_eur: number;
  };