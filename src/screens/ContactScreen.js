import React from 'react';
import hunddagis from '../assets/graphics/hunddagis.jpg';
import style from '../css/contact.module.css';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

const ContactScreen = () => {

  const { t } = useTranslation();

  const history = useHistory();

  function handleClick() {
    alert('Tack för ditt meddelande!')
    history.push('/contact')
  }

  return (
    <section className={style.logoContainer}>
      <div className={style.contactTitle}>
        <h2 className={style.contactTitle}>{t('contact.title')}</h2>
      </div>

      <div className={style.contactDetailsContainer}>
        <div className={style.leftContainer}>
          <img className={style.img} alt="location" src={hunddagis}></img>
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

        {/* Contact Form */}
        <aside className={style.contactContainer}>
          <form className={style.contactForm}>
          <h3 className={style.contactFormTitle}>{t('contact.contactForm.title')}</h3>
            <ul className={style.contactFormContact}>
              <li>
                <label htmlFor="firstName">{t('contact.contactForm.formData.firstName')}</label>
                <input type="text" id="firstName"></input>
              </li>
              <li>
                <label htmlFor="lastName">{t('contact.contactForm.formData.lastName')}</label>
                <input type="text" id="lastName"></input>
              </li>
              <li>
                <label htmlFor="email">{t('contact.contactForm.formData.email')}</label>
                <input type="email" id="email"></input>
              </li>
              <li>
                <label htmlFor="dropDownMenu">{t('contact.contactForm.formData.subject')}</label>
                <select className={style.dropDownMenu} id="dropDownMenu">
                  <option value="booking">{t('contact.contactForm.formData.subject')}</option>
                  <option value="questions">{t('contact.contactForm.formData.subject')}</option>
                  <option value="feedback">{t('contact.contactForm.formData.subject')}</option>
                  <option value="complaint">{t('contact.contactForm.formData.subject')}</option>
                </select>
              </li>
              <li className={style.textAreaContainer}>
                <label htmlFor="message">{t('contact.contactForm.formData.message')}</label>
                <textarea type="text" className={style.contactText}id="message"></textarea>
              </li>
              <li>
                <input type="submit" value={t('contact.contactForm.formData.button')} onClick={handleClick} className={style.submitForm}></input>
              </li>
            </ul>
          </form>
        </aside>
      </div>
    </section>
  );
};

export default ContactScreen;
