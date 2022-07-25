import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './User.css';
import classNames from 'classnames';

export default function User() {
  const [isOpen, setIsOpen] = useState(false);

  const className = classNames(styles.User, {
    [styles.Open]: isOpen,
  });

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <button className={className} onClick={handleClick}>
      User
      <div className={styles.MenuContainer}>
        <Link to="auth/login">Sign In</Link>
        <Link to="auth/sign-up">Sign Up</Link>
      </div>
    </button>
  );
}
