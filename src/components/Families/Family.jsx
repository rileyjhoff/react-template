import { useActions } from '../../state/hooks/families';
import styles from './Family.css';

export default function Family({ family }) {
  const { remove } = useActions();
  
  const handleRemove = () => remove(family.id);

  return (
    <li className={styles.Family}>
      <h2>{family.name}</h2>
      <button onClick={handleRemove}>ⓧ</button>
    </li>
  );
}
