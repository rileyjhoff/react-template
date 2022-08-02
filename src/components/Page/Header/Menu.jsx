import { useEffect, useState } from 'react';
import Navigation from './Navigation.jsx';
import styles from './Menu.css';
import classNames from 'classnames';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const className = classNames(styles.Menu, {
    [styles.Open]: isOpen,
  });

  const handleClick = (e) => {
    if (e.target.className === className) {
      e.stopPropagation();
      setIsOpen((isOpen) => !isOpen);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const closeMenu = (e) => {
      if (e.target.className !== styles.MenuContainer) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', closeMenu);

    const keyHandler = (e) => {
      if (e.key !== 'Escape') return;
      setIsOpen(false);
    };
    document.addEventListener('keydown', keyHandler);

    const resizeHandler = (e) => {
      if (e.target.innerWidth >= 750) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', resizeHandler);
    
    return () => {
      document.removeEventListener('click', closeMenu);
      document.removeEventListener('keydown', keyHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, [isOpen]);

  return (
    <button className={className} onClick={handleClick}>
      <div className={styles.MenuContainer}>
        <Navigation />
      </div>
    </button>
  );
}
