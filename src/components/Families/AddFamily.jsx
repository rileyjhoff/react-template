import { useState } from 'react';
import { useActions } from '../../state/hooks/families';
import SubmitButton from '../Buttons/SubmitButton';
import { InputControl } from '../Forms/FormControls';
import styles from './AddFamily.css';

export default function AddFamily() {
  const { add } = useActions();
  const [name, setName] = useState('');

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await add({ name });
    setName('');
  };

  return (
    <form className={styles.AddFamily} onSubmit={handleSubmit}>
      <InputControl 
        label="Add family"
        name="family"
        value={name}
        onChange={handleChange}
      />
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
}
