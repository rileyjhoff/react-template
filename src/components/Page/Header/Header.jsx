import styles from './Header.css';
import Menu from './Menu';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}><Menu /></div>
      <div className={styles.TitleContainer}>
        <h1>App Title</h1>
      </div>
      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>
      <div className={styles.UserContainer}>User</div>
    </header>
  );
}
