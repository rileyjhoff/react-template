import { useState } from 'react';
import Family from './Family';
import styles from './FamilyList.css';

export default function FamilyList() {
  const [families, setFamilies] = useState([{ id: 1, name: 'Hoffman family' }]);

  return (
    <ul className={styles.FamilyList}>
      {families.map((family) => <Family key={family.id} family={family} />)}
    </ul>
  );
}
