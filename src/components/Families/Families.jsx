import AddFamily from './AddFamily';
import styles from './Families.css';
import FamilyList from './FamilyList';

export default function Families() {
  return (
    <div className={styles.Families}>
      <AddFamily />
      <FamilyList />
    </div>
  );
}
