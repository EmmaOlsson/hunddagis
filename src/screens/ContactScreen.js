import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import hunddagis from '../assets/graphics/hunddagis.jpg';
import style from '../css/contact.module.css';

const ContactScreen = () => {

  return(
    <section className={style.logoContainer}>
      
      <div className={style.contactTitle}>
        <span className={style.contactTitle}>Kontakta oss</span>
      </div>

      <div className={style.contactDetailsContainer}>
        <div>
        <img className={style.img} src={hunddagis}></img>
        </div>

        <div className={style.contactDetails}>
          <div className={style.content}>

            <div className={style.titleContainer}>
              <span className={style.contactDetailsTitle}>Kontaktuppgifter</span>
            </div>
            
            <div className={style.nameContainer}>
              <span className={style.subHeading}>Namn: </span>
              <span>Hunddagis</span>
            </div>

            <div className={style.addressContainer}>
              <span className={style.subHeading}>Adress: </span>
              <span>Båthusgatan 9, 25667 Helsingborg</span>
            </div>

            <div className={style.phoneContainer}>
              <span className={style.subHeading}>Telefon: </span>
              <span>070-567 47 23</span>
            </div>

            <div>
              <span className={style.subHeading}>E-post: </span>
              <span>test@testsson.com</span>
            </div>


          </div>
          
        </div>
      </div>
    </section>
  )
};

export default ContactScreen;
