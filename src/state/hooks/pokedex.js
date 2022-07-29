import { useState, useEffect } from 'react';
import { getPokedex, getTypes } from '../services/pokedex-service.js';

export function usePokedex(searchParams) {
  const searchQuery = searchParams.toString();
  const [error, setError] = useState(null);
  const [pokedex, setPokedex] = useState(null);
  const [query, setQuery] = useState(searchQuery);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const [addDisabled, setAddDisabled] = useState(false);
  const [backDisabled, setBackDisabled] = useState(true);

  useEffect(() => {
    setQuery(searchQuery);
    setPage(1);
    setPokedex([]);
  }, [searchQuery]);

  useEffect(() => {
    const fetch = async () => {
      const { data = {}, error } = await getPokedex(searchParams, page, perPage);

      if (data) {
        const { results, count } = data;
        setCount(count);
        setPage(page);
        setPerPage(perPage);
        setError(null);
        setPokedex(results);
        if (page < Math.ceil(count / perPage)) {
          setAddDisabled(false);
        } else {
          setAddDisabled(true);
        }
        if (page > 1) {
          setBackDisabled(false);
        } else {
          setBackDisabled(true);
        }
      }

      if (error) {
        setError(error);
      }
    };
    fetch();
  }, [query, page]);

  const addPage = () => {
    if (page < Math.ceil(count / perPage)) {
      setPage((page) => page + 1);
    }
  };

  const backPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  return { pokedex, error, addPage, backPage, backDisabled, addDisabled };
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
