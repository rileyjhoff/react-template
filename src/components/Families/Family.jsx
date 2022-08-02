import { useState } from 'react';
import { useActions } from '../../state/hooks/families';
import { InputControl } from '../Forms/FormControls';
import styles from './Family.css';

export default function Family({ family }) {
  const { remove, update } = useActions();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(family.name);

  const handleRemove = async () => {
    const warning = `Are you sure you want to remove ${family.name}?`;
    if (confirm(warning)) {
      await remove(family.id);
    }
  };

  const handleEditStart = () => setEditing(true);

  const handleChange = (e) => setName(e.target.value);

  const handleEditFinish = async () => {
    setEditing(false);
    if (name === family.name) return;
    await update({ family, ...name });
  };

  const handleKeyUp = (e) => {
    if (e.code === 'Enter') handleEditFinish();
  };


  return (
    <li className={styles.Family}>
      {editing ? (
        <>
          <button onClick={handleEditFinish}>✅</button>
          <InputControl 
            name="edit-family-name"
            value={name}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            className={styles.EditInput}
          />
        </>
      ) : (
        <>
          <button onClick={handleEditStart}>✍️</button>
          <h2>{family.name}</h2>
          <button onClick={handleRemove}>ⓧ</button>
        </>
      )}
    </li>
  );
}
