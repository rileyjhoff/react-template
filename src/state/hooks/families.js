import { useContext, useEffect, useState } from 'react';
import { FamiliesContext } from '../context/FamiliesContext.jsx';
import { getAllFamilies } from '../services/families-service.js';

export function useFamilies() {
  const [error, setError] = useState(null);
  const { families, dispatch } = useContext(FamiliesContext);

  useEffect(() => {
    if (families) return;
    let ignore = false;

    const fetch = async () => {
      const { data, error } = await getAllFamilies();
      if (ignore) return;

      if (error) {
        setError(error);
      }
      if (data) {
        dispatch({ type: 'load', payload: data });
      }
    };

    fetch();

    return () => (ignore = true);
  }, []);

  return { families, error };
}
