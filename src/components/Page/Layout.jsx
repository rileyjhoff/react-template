import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './reset.css';
import './global.css';
import styles from './Layout.css';

export default function Layout() {
  return (
    <>
      <div className={styles.Layout}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
