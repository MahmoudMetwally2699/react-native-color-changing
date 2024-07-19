import { useState, useEffect } from 'react';
import api from '@/components/api';

export default () => {
  interface Business {
    id: string;
    name: string;
    location: {
      address1: string;
    };
    price: string;
  }

  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<Business[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const updateSearch = (search: string) => {
    setSearch(search);
  };
  const searchs="Starbucks"

  const apiResult = async () => {
    setLoading(true);
    try {
      const response = await api.get('/search', {
        params: {
          limit: 50,
          term: search,
          location: 'san-francisco',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      apiResult();
    } else {
      setResults([]);
    }
  }, [search]);

  return [results, loading, search, apiResult, updateSearch] as const;
};
