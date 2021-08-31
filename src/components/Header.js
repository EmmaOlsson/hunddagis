import React, { useState } from 'react';
import Styles from '../css/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className={Styles.logoContainer}>
        {/* <img className='img-logo' src='' alt='logo' /> */}
        <h3>"Hundkojan - logo"</h3>
      </div>
      <nav>
        <ul className={Styles.navList} id={isOpen ? `${Styles.hidden}` : ''}>
          <li className={Styles.navListItem}>Om oss</li>
          <li className={Styles.navListItem}>Vanliga Frågor</li>
          <li className={Styles.navListItem}>Kontakt</li>
        </ul>
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className={Styles.hamburgerMenu}
          onClick={() => setIsOpen(!isOpen)}
        ></FontAwesomeIcon>
      </nav>
    </header>
  );
};

export default Header;
