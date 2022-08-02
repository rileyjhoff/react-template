import { useState } from 'react';
import SubmitButton from '../Buttons/SubmitButton';
import { InputControl } from '../Forms/FormControls';
import styles from './AddFamily.css';

export default function AddFamily() {
  const [name, setName] = useState('');

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
