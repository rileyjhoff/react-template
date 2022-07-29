import styles from './PokemonList.css';

export default function PokemonList({ pokedex }) {
  return (
    <ul className={styles.PokemonList}>
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
