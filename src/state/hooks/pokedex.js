import { useState, useEffect } from 'react';
import { getPokedex, getTypes } from '../services/pokedex-service.js';

export function usePokedex(searchParams) {
  const [error, setError] = useState(null);
  const [pokedex, setPokedex] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const { data = {}, error } = await getPokedex(searchParams);

      if (data) {
        const { results, count } = data;
        setPokedex(results);
        setCount(count);
        setError(null);
      }

      if (error) {
        setError(error);
      }
    };

    fetch();
  }, [searchParams]);

  return { pokedex, error, count };
}

export function useTypes() {
  const [types, setTypes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await getTypes();
      setTypes(data);
      setError(error);
    };

    fetch();
  }, []);

  return { types, error };
}
