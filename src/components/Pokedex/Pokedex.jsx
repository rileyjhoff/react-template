import { useSearchParams } from 'react-router-dom';
import { usePokedex } from '../../state/hooks/pokedex';
import styles from './Pokedex.css';
import PokemonList from './PokemonList';
import Search from './Search';

export default function Pokedex() {
  const [searchParams] = useSearchParams();
  const { pokedex, addPage, backPage, backDisabled, addDisabled } = usePokedex(searchParams);
  if (!pokedex) return null;

  return (
    <div className={styles.Pokedex}>
      <div className={styles.flex}>
        <Search />
        <div>
          <button onClick={backPage} disabled={backDisabled}>Back</button>
          <button onClick={addPage} disabled={addDisabled}>Next</button>
        </div>
      </div>
      <PokemonList pokedex={pokedex} />
      {pokedex.length > 30 && <div className={styles.bottomFlex}>
        <button onClick={backPage} disabled={backDisabled}>Back</button>
        <button onClick={addPage} disabled={addDisabled}>Next</button>
      </div>}
    </div>
  );
}
