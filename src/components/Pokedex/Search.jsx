import { useState, useEffect } from 'react';
import { useTypes } from '../../state/hooks/pokedex.js';
import { useSearch } from '../../state/hooks/search.js';
import SubmitButton from '../Buttons/SubmitButton.jsx';
import { InputControl, SelectControl } from '../Forms/FormControls.jsx';
import styles from './Search.css';

export default function Search() {
  const { types } = useTypes();
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
      <SelectControl
        label="Type"
        name="type"
        value={formSearch.type}
        onChange={handleChange}
      >
        <option value={''}>All (801)</option>
        {types.map(({ type, count }) => (
          <TypeOption key={type} type={type} count={count} />
        ))}
      </SelectControl>
      <SubmitButton>🔍</SubmitButton>
    </form>
  );
}

function TypeOption({ type, count }) {
  return (
    <option value={type}>
      {`${type.charAt(0).toUpperCase() + type.slice(1)} (${count})`}
    </option>
  );
}
