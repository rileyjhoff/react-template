import styles from './Buttons.css';

export default function SubmitButton({ children }) {
  return (
    <button className={styles.SubmitButton}>
      {children}
    </button>
  );
}
