import React from 'react';
import hunddagis from '../assets/graphics/hunddagis.jpg';
import style from '../css/contact.module.css';
import { useTranslation, Trans } from 'react-i18next';

const ContactScreen = () => {

  const { t, i18n } = useTranslation();

  return (
    <section className={style.logoContainer}>
      <div className={style.contactTitle}>
        <span className={style.contactTitle}>{t('contact.title')}</span>
      </div>

      <div className={style.contactDetailsContainer}>
        <div>
          <img className={style.img} src={hunddagis}></img>
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
              <span>Hunddagis</span>
            </div>

            <div className={style.addressContainer}>
              <span className={style.subHeading}>{t('contact.contactDetails.address')} </span>
              <span>Båthusgatan 9, 25667 Helsingborg</span>
            </div>

            <div className={style.phoneContainer}>
              <span className={style.subHeading}>{t('contact.contactDetails.phone')} </span>
              <span>070-567 47 23</span>
            </div>

            <div>
              <span className={style.subHeading}>{t('contact.contactDetails.Email')} </span>
              <span>test@testsson.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactScreen;
