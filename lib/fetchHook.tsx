import { useState, useEffect, useCallback } from 'react';

export default function fetchHook(url: string, options: { method: string; body: any }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({});
  const [error, setError] = useState<any>({});

  const makeRequest = useCallback(async () => {
    const response = await fetch(url, options);

    if (!response.ok) {
      setLoading(false);
      setError('Somthing went wrong');
      return;
    }

    if (response.ok) {
      const result = await response.json();

      setData(result);
      setLoading(false);
    }

  }, [data, loading, error, options, url]);

  return { data, loading, error, makeRequest };
}
