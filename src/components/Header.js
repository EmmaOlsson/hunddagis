import React, { useState } from 'react';
import Styles from '../css/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/graphics/dog-logo-paws.png';
import sweden from '../assets/graphics/sweden-flag.png';
import england from '../assets/graphics/uk-flag.png';
import { Link } from 'react-router-dom';

import { useTranslation, Trans } from 'react-i18next';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header>
      <Link to='/' className={Styles.logoContainer}>
        <img className={Styles.imgLogo} src={logo} alt='logo' />
        <h2 className={Styles.logoName}>Hundkojan</h2>
      </Link>

      <nav className={Styles.nav}>
        <ul className={Styles.navList} id={isOpen ? `${Styles.hidden}` : ''}>
          <Link to='/about' className={Styles.navListItem}>
            {t('navbar.about')}
          </Link>
          <Link to='/blog' className={Styles.navListItem}>
            {t('navbar.blog')}
          </Link>
          <Link to='/faq' className={Styles.navListItem}>
            {t('navbar.questions')}
          </Link>
          <Link to='/contact' className={Styles.navListItem}>
            {t('navbar.contact')}
          </Link>
        </ul>
        <div
          className={Styles.language}
          id={isOpen ? `${Styles.hiddenFlag}` : ''}
        >
          <img
            onClick={() => changeLanguage('sv')}
            className={Styles.flag}
            id={Styles.sweden}
            src={sweden}
            alt=''
          />
          <img
            onClick={() => changeLanguage('en')}
            className={Styles.flag}
            src={england}
            alt=''
          />
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
