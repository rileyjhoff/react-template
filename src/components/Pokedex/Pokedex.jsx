import { useSearchParams } from 'react-router-dom';
import { usePokedex } from '../../state/hooks/pokedex';
import styles from './Pokedex.css';
import PokemonList from './PokemonList';
import Search from './Search';

export default function Pokedex() {
  const [searchParams] = useSearchParams();
  const { pokedex } = usePokedex(searchParams);

  if (!pokedex) return null;

  return (
    <div className={styles.Pokedex}>
      <Search />
      <PokemonList pokedex={pokedex} />
    </div>
  );
}
