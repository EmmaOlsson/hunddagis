import React from 'react';
import hunddagis from '../assets/graphics/hunddagis.jpg';
import style from '../css/contact.module.css';
import { useTranslation } from 'react-i18next';

const ContactScreen = () => {

  const { t, i18n } = useTranslation();

  return (
    <section className={style.logoContainer}>
      <div className={style.contactTitle}>
        <span className={style.contactTitle}>{t('contact.title')}</span>
      </div>

      <div className={style.contactDetailsContainer}>
        <div>
          <img className={style.img} alt="location" src={hunddagis}></img>
        </div>

        <div className={style.contactDetails}>
          <div className={style.content}>
            <div className={style.titleContainer}>
              <span className={style.contactDetailsTitle}>
                {t('contact.contactDetails.title')}
              </span>
            </div>

            <div className={style.nameContainer}>
              <span className={style.subHeading}>{t('contact.contactDetails.name')} </span>
              <span className={style.information}>Hunddagis</span>
            </div>

            <div className={style.addressContainer}>
              <span className={style.subHeading}>{t('contact.contactDetails.address')} </span>
              <span className={style.information}>Båthusgatan 9, 25667 Helsingborg</span>
            </div>

            <div className={style.phoneContainer}>
              <span className={style.subHeading}>{t('contact.contactDetails.phone')} </span>
              <span className={style.information}>000000000</span>
            </div>

            <div className={style.emailContainer}>
              <span className={style.subHeading}>{t('contact.contactDetails.Email')} </span>
              <span className={style.information}>test@testsson.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactScreen;
