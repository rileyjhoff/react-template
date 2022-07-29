import { useState, useEffect } from 'react';
import { useSearch } from '../../state/hooks/search.js';
import SubmitButton from '../Buttons/SubmitButton.jsx';
import { InputControl } from '../Forms/FormControls.jsx';
import styles from './Search.css';

export default function Search() {
  const { params, setParams } = useSearch();
  const [formSearch, setFormSearch] = useState({});
  const { pokemon, type } = params;

  useEffect(() => {
    setFormSearch({ pokemon, type });
  }, [pokemon, type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setParams(formSearch);
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormSearch((formSearch) => ({ ...formSearch, [name]: value }));
  };

  return (
    <form className={styles.Search} onSubmit={handleSubmit}>
      <InputControl
        label="Pokemon"
        name="pokemon"
        value={formSearch.pokemon}
        onChange={handleChange}
      />
      <InputControl
        label="Type"
        name="type"
        value={formSearch.type}
        onChange={handleChange}
      />
      <SubmitButton>🔍</SubmitButton>
    </form>
  );
}
