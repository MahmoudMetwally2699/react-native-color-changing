import { useState, useEffect } from 'react';
import api from '@/components/api';

export default () => {
  const [results, setResults] = useState([]);

  const apiResult = async (id) => {
    try {
      const response = await api.get(`/${id}`);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    } 
  };

  return [results, apiResult];
};
