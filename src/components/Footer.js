import React from 'react';

import { Link } from 'react-router-dom';
import Styles from '../css/footer.module.css';

const Footer = () => {

  return (
    <section className={ Styles.footerContainer } >
        <footer className={Styles.mainFooter} >
            <div className={Styles.footerTop} >
              <ul className={Styles.footerLinks} >

                <Link to='/about' className={Styles.footerLink} >Om oss</Link>

                <Link to='/blog' className={Styles.footerLink} >Blogg</Link>

                <Link to='/faq' className={Styles.footerLink} >Vanliga frågor</Link>

                <Link to='/blog' className={Styles.footerLink} >Kontakt</Link>

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
