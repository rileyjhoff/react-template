import styles from './Header.css';
import Menu from './Menu';
import Navigation from './Navigation';
import Title from './Title';
import User from './User';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <Menu />
      </div>
      <Title />
      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>
      <User />
    </header>
  );
}
