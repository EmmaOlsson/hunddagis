import React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';
import Styles from '../css/footer.module.css';

const Footer = () => {

  const { t, i18n } = useTranslation();

  return (
    <section className={ Styles.footerContainer } >
        <footer className={Styles.mainFooter} >
            <div className={Styles.footerTop} >
              <ul className={Styles.footerLinks} >

                <Link to='/about' className={Styles.footerLink} >{t('footer.about')}</Link>

                <Link to='/blog' className={Styles.footerLink} >{t('footer.blog')}</Link>

                <Link to='/faq' className={Styles.footerLink} >{t('footer.questions')}</Link>

                <Link to='/contact' className={Styles.footerLink} >{t('footer.contact')}</Link>

              </ul>
            </div>

            
            <div className={Styles.footerBottom} >
              <h2 className={Styles.footerText} >Hundkojan</h2>
              <div className={Styles.footerLine} ></div>
              <p className={Styles.footerCopyright} >&copy; Hundkojan AB 2021</p>
            </div>

        </footer>
    </section>
  )
  

};

export default Footer;
