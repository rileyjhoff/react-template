import { usePokedex } from '../../state/hooks/pokedex';
import styles from './List.css';

export default function List() {
  const { pokedex } = usePokedex();

  if (!pokedex) return null;
  return (
    <ul className={styles.List}>
      {pokedex.map((pokemon) => (
        <Card key={pokemon._id} pokemon={pokemon} />
      ))}
    </ul>
  );
}


function Card({ pokemon }) {
  const {
    url_image,
    pokemon: name,
  } = pokemon;

  return (
    <li className={styles.Card}>
      <img src={url_image} alt={name} />

      <h3 className={styles.Header}>{name.toUpperCase()}</h3>
    </li>
  );
}
