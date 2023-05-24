import { useCallback, useEffect, useState } from 'react';
import {priceHistory} from './hooks.types';
import axios from 'axios';



const usePriceHistory = (url: string) => {
  const [data, setData] = useState<priceHistory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchJson = useCallback(async () => {
    setIsLoading(true);

    await axios
      .get(url)
      .then((response) => {
        console.log(data);
        setData(response.data);
      })
      .catch((e: Error) => {
        setError(e.message);
      });

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchJson();
  }, []);

  return { data, error, isLoading };
};

export default usePriceHistory;
