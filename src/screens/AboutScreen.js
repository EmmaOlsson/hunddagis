import React from 'react';
import Styles from '../css/about.module.css'

import logoDog from '../assets/graphics/Hund-logo-color.png'

const AboutScreen = () => {
  return <section>
    <main>
    <article className={Styles.aboutText}>
      <div>
        <img className={Styles.logoDog} src={logoDog} alt='logo-dog'></img>
      </div>
      <div>
        <img className={Styles.logoDog} src={logoDog} alt='logo-dog'></img>
      </div>
      <div>
      <img className={Styles.logoDog} src={logoDog} alt='logo-dog'></img>
      </div>
      </article>
    </main>
  </section>;
};

export default AboutScreen;
