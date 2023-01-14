import { useState } from 'react';

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeFetch = async (url, options) => {
    setIsLoading(true);
    try {
      let response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      let result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, makeFetch };
}
