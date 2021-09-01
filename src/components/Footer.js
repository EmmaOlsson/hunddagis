import React from 'react';

import Styles from '../css/footer.module.css';

const Footer = () => {
  return (
    <section>
        <footer className={Styles.mainFooter} >
            <div className={Styles.footerTop} >
            <nav className={Styles.navFooter} >
              <ul className={Styles.navFooter} >
                <li className={Styles.navFooterItem} >Blogg</li>
                <li className={Styles.navFooterItem} >Om oss</li>
                <li className={Styles.navFooterItem} >Vanliga frågor</li>
                <li className={Styles.navFooterItem} >Kontakt</li>
              </ul>
            </nav>
            </div>

            <div className={Styles.footerBottom} >
              <p>&copy; Hundkojan AB 2021</p>
            </div>

        </footer>
    </section>
  )
  

};

export default Footer;
