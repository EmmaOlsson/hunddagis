import React, { useState } from 'react';
import Styles from '../css/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/graphics/dog-logo-paws.png';
import sweden from '../assets/graphics/sweden-flag.png';
import england from '../assets/graphics/uk-flag.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <Link to='/' className={Styles.logoContainer}>
        <img className={Styles.imgLogo} src={logo} alt='logo' />
        <h2 className={Styles.logoName}>Hundkojan</h2>
      </Link>

      <nav className={Styles.nav}>
        <ul className={Styles.navList} id={isOpen ? `${Styles.hidden}` : ''}>
          <Link to='/about' className={Styles.navListItem}>
            Om oss
          </Link>
          <Link to='/blog' className={Styles.navListItem}>
            Blogg
          </Link>
          <Link to='/faq' className={Styles.navListItem}>
            Vanliga Frågor
          </Link>
          <Link to='/contact' className={Styles.navListItem}>
            Kontakt
          </Link>
        </ul>
        <div
          className={Styles.language}
          id={isOpen ? `${Styles.hiddenFlag}` : ''}
        >
          <img className={Styles.flag} id={Styles.sweden} src={sweden} alt='' />
          <img className={Styles.flag} src={england} alt='' />
        </div>

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
