import React from 'react';
import hunddagis from '../assets/graphics/hunddagis.jpg';
import style from '../css/contact.module.css';

const ContactScreen = () => {

  return(
    <section className={style.logoContainer}>
      
      <div className={style.contactTitle}>
        <span className={style.contactTitle}>Kontakta oss</span>
      </div>

      <div className={style.contactDetails}>
        <div>
        <img className={style.img} src={hunddagis}></img>
        </div>

        <div>
          <span>Kontaktuppgifter</span>
        </div>
      </div>
    </section>
  )
};

export default ContactScreen;
