import { useCallback, useEffect, useState } from 'react';
import {listing} from './hooks.types';
import axios from 'axios';



const useListing = (url: string) => {
  const [data, setData] = useState<listing[]>([]);
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
        setError('Error fetching data');
      });

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchJson();
  }, []);

  return { data, error, isLoading };
};

export default useListing;
